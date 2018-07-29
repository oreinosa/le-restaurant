"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var passport_1 = require("../config/passport");
var category_model_1 = require("../models/category.model");
var CategoryRouter = (function () {
    function CategoryRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    CategoryRouter.prototype.all = function (req, res) {
        category_model_1.Category.find({})
            .then(function (data) {
            return res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).send(error);
            return error;
        });
    };
    CategoryRouter.prototype.one = function (req, res) {
        var _id = req.params._id;
        category_model_1.Category.findById(_id)
            .then(function (data) {
            if (data) {
                res.status(200).json({ data: data });
            }
            else {
                res.status(404).send("Category not found");
            }
        })
            .catch(function (error) {
            res.status(500).send(error);
        });
    };
    CategoryRouter.prototype.create = function (req, res) {
        var _a = req.body, name = _a.name, description = _a.description;
        var category = new category_model_1.Category({
            name: name,
            description: description,
        });
        if (name && description) {
            category_model_1.Category.create(category)
                .then(function (category) {
                var data = category;
                res.status(201).json({ data: data });
            })
                .catch(function (error) {
                res.status(400).send(error);
            });
        }
        else {
            res.status(400).send("Missing fields");
        }
    };
    CategoryRouter.prototype.update = function (req, res) {
        var _id = req.params._id;
        category_model_1.Category.findByIdAndUpdate(_id, { $set: req.body }, { new: true })
            .then(function (data) {
            if (data) {
                res.status(200).json({ data: data });
            }
            else {
                res.status(404).send('Category not found');
            }
        })
            .catch(function (error) {
            res.status(400).send(error);
        });
    };
    CategoryRouter.prototype.delete = function (req, res) {
        var _id = req.params._id;
        category_model_1.Category.findByIdAndRemove(_id)
            .then(function () {
            res.status(204).end();
        })
            .catch(function (error) {
            res.status(500).send(error);
        });
    };
    CategoryRouter.prototype.routes = function () {
        var requireAdmin = passport_1.default.authenticate("admin", { session: false });
        this.router
            .route("/")
            .all(requireAdmin)
            .get(this.all)
            .post(this.create);
        this.router
            .route("/:_id")
            .all(requireAdmin)
            .get(this.one)
            .put(this.update)
            .delete(this.delete);
    };
    return CategoryRouter;
}());
var categoryRoutes = new CategoryRouter();
categoryRoutes.routes();
exports.default = categoryRoutes.router;
//# sourceMappingURL=category.router.js.map