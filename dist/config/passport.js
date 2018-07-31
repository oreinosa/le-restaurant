"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport_jwt_1 = require("passport-jwt");
var passport = require("passport");
var user_model_1 = require("../models/user.model");
var config_1 = require("./config");
var opts = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config_1.Config.secret
};
var isLoggedInStrategy = new passport_jwt_1.Strategy(opts, function (jwt_payload, done) {
    var id = jwt_payload.data._id;
    user_model_1.User.findById(id)
        .then(function (user) {
        user.password = undefined;
        return done(null, user);
    })
        .catch(function (err) {
        return done(err);
    });
});
var isAdminStrategy = new passport_jwt_1.Strategy(opts, function (jwt_payload, done) {
    var id = jwt_payload.data._id;
    var role = "Admin";
    var query = { _id: id, role: role };
    user_model_1.User.findOne(query)
        .then(function (user) {
        if (user) {
            user.password = undefined;
            return done(null, user);
        }
        return done(null);
    })
        .catch(function (err) {
        return done(err);
    });
});
passport.use("auth", isLoggedInStrategy);
passport.use("admin", isAdminStrategy);
exports.default = passport;
//# sourceMappingURL=passport.js.map