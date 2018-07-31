import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import * as passport from "passport";
import { User, IUser } from "../models/user.model";
import { Config } from "./config";

//configure Strategy Options
let opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: Config.secret
};
// strategy to check if user's id is found
let isLoggedInStrategy = new Strategy(opts, (jwt_payload, done) => {
  // console.log("strategy");
  const id = jwt_payload.data._id;
  User.findById(id)
    .then((user: IUser) => {
      user.password = undefined;
      return done(null, user);
    })
    .catch((err: any) => {
      return done(err);
    });
});
// strategy to check if user's id is found and its role is "Admin"
let isAdminStrategy: Strategy = new Strategy(opts, (jwt_payload, done) => {
  const id = jwt_payload.data._id;
  const role = "Admin";
  const query = { _id: id, role: role };
  User.findOne(query)
    .then((user: IUser) => {
      if (user) {
        user.password = undefined;
        return done(null, user);
      }
      return done(null);
    })
    .catch((err: any) => {
      return done(err);
    });
});

// adding strategies
passport.use("auth", isLoggedInStrategy);
passport.use("admin", isAdminStrategy);

export default passport;
