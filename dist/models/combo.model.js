"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var product_model_1 = require("./product.model");
product_model_1.Product.schema.path('category').required(false);
var ComboSchema = new mongoose_1.Schema({
    products: [product_model_1.Product.schema]
});
exports.Combo = mongoose_1.model("Combo", ComboSchema, "combos");
//# sourceMappingURL=combo.model.js.map