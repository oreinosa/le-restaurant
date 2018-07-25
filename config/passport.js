"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport_jwt_1 = require("passport-jwt");
var User = require("../models/user");
var config = require("../config/database");
function init(passport) {
    var opts;
    opts.jwtFromRequest = passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.secret;
    passport.use("auth", new passport_jwt_1.Strategy(opts, function (jwt_payload, done) {
        User.findById(jwt_payload.data._id)
            .then(function (user) {
            var profile = {
                name: user.name,
                email: user.email,
                _id: user._id
            };
            return done(null, profile);
        })
            .catch(function (err) {
            return done(err);
        });
    }));
    passport.use("admin", new passport_jwt_1.Strategy(opts, function (jwt_payload, done) {
        User.findById(jwt_payload.data._id)
            .then(function (user) {
            return done(null, user.role === "Admin");
        })
            .catch(function (err) {
            return done(err);
        });
    }));
}
exports.init = init;
//# sourceMappingURL=passport.js.map