const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');

module.exports = function (passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = config.secret;

  passport.use('auth', new JwtStrategy(opts, function (jwt_payload, done) {
    User.findById(jwt_payload.data._id)
      .then(user => {
        const profile = {
          name: user.name,
          email: user.email,
          _id: user._id
        }
        return done(null, profile);
      })
      .catch(err => {
        return done(err);
      });
  }));

  passport.use('admin', new JwtStrategy(opts, function (jwt_payload, done) {
    User.findById(jwt_payload.data._id)
      .then(user => {
        return done(null, user.role === "Admin");
      })
      .catch(err => {
        return done(err);
      });
  }));
}
