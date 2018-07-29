"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_model_1 = require("../models/user.model");
var passport_1 = require("../config/passport");
var config_1 = require("../config/config");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
function hashPassword(newUser) {
    return bcrypt.genSalt(10).then(function (salt) {
        return bcrypt.hash(newUser.password, salt).then(function (hash) {
            newUser.password = hash;
        });
    });
}
exports.hashPassword = hashPassword;
function comparePassword(candidatePassword, hash) {
    return bcrypt.compare(candidatePassword, hash);
}
exports.comparePassword = comparePassword;
var AuthRouter = (function () {
    function AuthRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    AuthRouter.prototype.login = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (email && password) {
            var query = { email: email };
            user_model_1.User.findOne(query)
                .then(function (user) {
                if (user) {
                    comparePassword(password, user.password)
                        .then(function (flag) {
                        if (flag) {
                            user.password = undefined;
                            var token = jwt.sign({ data: user }, config_1.Config.secret, {
                                expiresIn: 604800
                            });
                            res.status(200).json({ user: user, token: token });
                        }
                        else {
                            res
                                .status(401)
                                .send("Email address or password are incorrect.");
                        }
                    })
                        .catch(function (error) {
                        res.status(500).send(error);
                    });
                }
                else {
                    res.status(401).send("Email address or password are incorrect.");
                }
            })
                .catch(function (error) {
                res.status(500).send(error);
            });
        }
        else {
            res.status(400).send("Missing fields");
        }
    };
    AuthRouter.prototype.register = function (req, res) {
        var _a = req.body, name = _a.name, username = _a.username, email = _a.email, password = _a.password;
        if (name && username && email && password) {
            var newUser_1 = new user_model_1.User({
                name: name,
                username: username,
                email: email,
                password: password
            });
            hashPassword(newUser_1)
                .then(function () {
                return user_model_1.User.create(newUser_1)
                    .then(function () {
                    newUser_1.password = undefined;
                    var data = newUser_1;
                    res.status(201).json({ data: data });
                })
                    .catch(function (_error) {
                    var error = " already in use";
                    var message = _error.message;
                    if (message.indexOf("username") >= 0) {
                        error = "Username" + error;
                    }
                    else if (message.indexOf("email") >= 0) {
                        error = "Email" + error;
                    }
                    res.status(401).send(error);
                });
            })
                .catch(function (error) { return res.status(500).send(error); });
        }
        else {
            res.status(400).send("Missing fields");
        }
    };
    AuthRouter.prototype.profile = function (req, res) {
        var data = req.user;
        res.status(200).json({ data: data });
    };
    AuthRouter.prototype.routes = function () {
        var requireLogin = passport_1.default.authenticate("auth", { session: false });
        this.router.post("/login", this.login);
        this.router.post("/register", this.register);
        this.router.post("/profile", requireLogin, this.profile);
    };
    return AuthRouter;
}());
var authRoutes = new AuthRouter();
authRoutes.routes();
exports.default = authRoutes.router;
//# sourceMappingURL=auth.router.js.map