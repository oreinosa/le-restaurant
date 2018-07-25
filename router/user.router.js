"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var passport_1 = require("passport");
var user_1 = require("../models/user");
var UserRouter = (function () {
    function UserRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    UserRouter.prototype.all = function (req, res) {
        user_1.default.find()
            .then(function (data) {
            return res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
            return error;
        });
    };
    UserRouter.prototype.one = function (req, res) {
        var username = req.params.username;
        user_1.default.findOne({ username: username })
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    UserRouter.prototype.create = function (req, res) {
        var _a = req.body, firstName = _a.firstName, lastName = _a.lastName, username = _a.username, email = _a.email, password = _a.password;
        var user = new user_1.default({
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: password
        });
        user
            .save()
            .then(function (data) {
            res.status(201).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    UserRouter.prototype.update = function (req, res) {
        var username = req.params.username;
        user_1.default.findOneAndUpdate({ username: username }, req.body)
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    UserRouter.prototype.delete = function (req, res) {
        var username = req.params.username;
        user_1.default.findOneAndRemove({ username: username })
            .then(function () {
            res.status(204).end();
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    UserRouter.prototype.routes = function () {
        this.router.get("/", passport_1.authenticate("auth", { session: false }), this.all);
        this.router.get("/:username", this.one);
        this.router.post("/", this.create);
        this.router.put("/:username", this.update);
        this.router.delete("/:username", this.delete);
    };
    return UserRouter;
}());
exports.UserRouter = UserRouter;
var userRoutes = new UserRouter();
userRoutes.routes();
exports.default = userRoutes.router;
//# sourceMappingURL=user.router.js.map