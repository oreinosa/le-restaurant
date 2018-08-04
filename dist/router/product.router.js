"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var passport_1 = require("../config/passport");
var product_model_1 = require("../models/product.model");
var ProductRouter = (function () {
    function ProductRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    ProductRouter.prototype.all = function (req, res) {
        product_model_1.Product.find({})
            .then(function (data) {
            return res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).send(error);
            return error;
        });
    };
    ProductRouter.prototype.one = function (req, res) {
        var _id = req.params._id;
        product_model_1.Product.findById(_id)
            .then(function (data) {
            if (data) {
                res.status(200).json({ data: data });
            }
            else {
                res.status(404).send("Product not found");
            }
        })
            .catch(function (error) {
            res.status(500).send(error);
        });
    };
    ProductRouter.prototype.create = function (req, res) {
        var _a = req.body, name = _a.name, price = _a.price, cost = _a.cost, imageURL = _a.imageURL, category = _a.category;
        if (name &&
            price &&
            cost &&
            imageURL &&
            (category && category.name && category._id)) {
            var product = new product_model_1.Product(req.body);
            product_model_1.Product.create(product)
                .then(function (product) {
                var data = product;
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
    ProductRouter.prototype.update = function (req, res) {
        var _id = req.params._id;
        product_model_1.Product.findByIdAndUpdate(_id, { $set: req.body }, { new: true })
            .then(function (data) {
            if (data) {
                res.status(200).json({ data: data });
            }
            else {
                res.status(404).send("Product not found");
            }
        })
            .catch(function (error) {
            res.status(400).send(error);
        });
    };
    ProductRouter.prototype.delete = function (req, res) {
        var _id = req.params._id;
        product_model_1.Product.findByIdAndRemove(_id)
            .then(function () {
            res.status(204).end();
        })
            .catch(function (error) {
            res.status(500).send(error);
        });
    };
    ProductRouter.prototype.routes = function () {
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
    return ProductRouter;
}());
var productRoutes = new ProductRouter();
productRoutes.routes();
exports.default = productRoutes.router;
//# sourceMappingURL=product.router.js.map