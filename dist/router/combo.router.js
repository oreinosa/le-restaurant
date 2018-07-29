"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var passport_1 = require("../config/passport");
var combo_model_1 = require("../models/combo.model");
var ComboRouter = (function () {
    function ComboRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    ComboRouter.prototype.all = function (req, res) {
        combo_model_1.Combo.find({})
            .then(function (data) {
            return res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).send(error);
            return error;
        });
    };
    ComboRouter.prototype.one = function (req, res) {
        var _id = req.params._id;
        combo_model_1.Combo.findById(_id)
            .then(function (data) {
            if (data) {
                res.status(200).json({ data: data });
            }
            else {
                res.status(404).send("Combo not found");
            }
        })
            .catch(function (error) {
            res.status(500).send(error);
        });
    };
    ComboRouter.prototype.create = function (req, res) {
        var products = req.body.products;
        var combo = new combo_model_1.Combo({
            products: products
        });
        if (products && products instanceof Array && products.length) {
            combo_model_1.Combo.create(combo)
                .then(function (combo) {
                var data = combo;
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
    ComboRouter.prototype.update = function (req, res) {
        var _id = req.params._id;
        combo_model_1.Combo.findByIdAndUpdate(_id, { $set: req.body }, { new: true })
            .then(function (data) {
            if (data) {
                res.status(200).json({ data: data });
            }
            else {
                res.status(404).send('Combo not found');
            }
        })
            .catch(function (error) {
            res.status(400).send(error);
        });
    };
    ComboRouter.prototype.delete = function (req, res) {
        var _id = req.params._id;
        combo_model_1.Combo.findByIdAndRemove(_id)
            .then(function () {
            res.status(204).end();
        })
            .catch(function (error) {
            res.status(500).send(error);
        });
    };
    ComboRouter.prototype.routes = function () {
        var requireAdmin = passport_1.default.authenticate("admin", { session: false });
        this.router
            .route("/")
            .get(this.all)
            .all(requireAdmin)
            .post(this.create);
        this.router
            .route("/:_id")
            .get(this.one)
            .all(requireAdmin)
            .put(this.update)
            .delete(this.delete);
    };
    return ComboRouter;
}());
var comboRoutes = new ComboRouter();
comboRoutes.routes();
exports.default = comboRoutes.router;
//# sourceMappingURL=combo.router.js.map