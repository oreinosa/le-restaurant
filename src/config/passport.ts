import { Strategy, ExtractJwt } from "passport-jwt";
const User = require("../models/user");
const config = require("../config/database");

export function init(passport: any) {
  let opts: any;
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = config.secret;

  passport.use(
    "auth",
    new Strategy(opts, function(jwt_payload, done) {
      User.findById(jwt_payload.data._id)
        .then((user: any) => {
          const profile = {
            name: user.name,
            email: user.email,
            _id: user._id
          };
          return done(null, profile);
        })
        .catch((err: any) => {
          return done(err);
        });
    })
  );

  passport.use(
    "admin",
    new Strategy(opts, function(jwt_payload, done) {
      User.findById(jwt_payload.data._id)
        .then((user: any) => {
          return done(null, user.role === "Admin");
        })
        .catch((err: any) => {
          return done(err);
        });
    })
  );
}
