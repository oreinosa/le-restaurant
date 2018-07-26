"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_model_1 = require("../models/user.model");
var passport_1 = require("../config/passport");
var UserRouter = (function () {
    function UserRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    UserRouter.prototype.all = function (req, res) {
        user_model_1.User.find({}, { password: 0 })
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
        user_model_1.User.findOne({ username: username })
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    UserRouter.prototype.create = function (req, res) {
        var _a = req.body, firstName = _a.firstName, lastName = _a.lastName, username = _a.username, email = _a.email, password = _a.password;
        var user = new user_model_1.User({
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
        user_model_1.User.findOneAndUpdate({ username: username }, { $set: req.body }, { new: true })
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    UserRouter.prototype.delete = function (req, res) {
        var username = req.params.username;
        user_model_1.User.findOneAndRemove({ username: username })
            .then(function () {
            res.status(204).end();
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    UserRouter.prototype.routes = function () {
        var requireAdmin = passport_1.default.authenticate("admin", { session: false });
        this.router
            .route("/")
            .all(requireAdmin)
            .get(this.all)
            .post(this.create);
        this.router
            .route("/:username")
            .all(requireAdmin)
            .put(this.update)
            .delete(this.delete);
    };
    return UserRouter;
}());
var userRoutes = new UserRouter();
userRoutes.routes();
exports.default = userRoutes.router;
//# sourceMappingURL=user.router.js.map