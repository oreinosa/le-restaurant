"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var fs = require("fs");
var path = require("path");
var pdf = require("html-pdf");
var ReceiptRouter = (function () {
    function ReceiptRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    ReceiptRouter.prototype.generateReceipt = function (req, res) {
        var _a = req.body, user = _a.user, subtotal = _a.subtotal;
        var products = [
            { id: "abc", name: "Pilsener", amount: 6, price: 1 },
            { id: "abc", name: "Pilsener", amount: 6, price: 1 },
            { id: "abc", name: "Golden", amount: 6, price: 1 }
        ];
        var templatePath = path.join(__dirname, "../../static/receipts");
        var filename = templatePath.replace(".html", ".pdf");
        var templateHTML = fs.readFileSync(templatePath, "utf8");
        console.log(filename);
        var items = "";
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var product = products_1[_i];
            items += "\n      <tr class=\"service\">\n          <td class=\"tableitem\"> <p class=\"itemtext\"> " + product.name + " <br> (" + product.id + ")</p></td >\n          <td class=\"tableitem\"> <p class=\"itemtext\"> " + product.amount + " </p></td >\n          <td class=\"tableitem\"> <p class=\"itemtext\"> $" + product.price + " </p></td >\n        </tr>\n      ";
        }
        var tip = subtotal * 0.1;
        var total = subtotal + tip;
        templateHTML = templateHTML.replace("{{subtotal}}", subtotal);
        templateHTML = templateHTML.replace("{{items}}", items);
        templateHTML = templateHTML.replace("{{tip}}", tip.toString());
        templateHTML = templateHTML.replace("{{total}}", total.toString());
        var options = {
            directory: "static/receipts"
        };
        pdf
            .create(templateHTML, options)
            .toFile(filename, function (err, fileinfo) {
            if (err)
                res.status(400).send(err.message);
            res.download(filename);
        });
    };
    ReceiptRouter.prototype.routes = function () {
        this.router.route("/").post(this.generateReceipt);
    };
    return ReceiptRouter;
}());
var receiptRoutes = new ReceiptRouter();
receiptRoutes.routes();
exports.default = receiptRoutes.router;
//# sourceMappingURL=receipt.router.js.map