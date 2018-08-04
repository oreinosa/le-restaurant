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
        var _a = req.body, userId = _a.userId, receiptNumber = _a.receiptNumber, subtotal = _a.subtotal, tax = _a.tax, total = _a.total;
        var products = [
            { id: "abc", name: "Pilsener", amount: 6, price: 1 },
            { id: "abc", name: "Pilsener", amount: 6, price: 1 },
            { id: "abc", name: "Golden", amount: 6, price: 1 }
        ];
        var templatePath = path.join(__dirname, "../../static/templates/receipt.html");
        var templateHTML = fs.readFileSync(templatePath, "utf8");
        var items = "";
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var product = products_1[_i];
            items += "\n      <tr class='text-center'>\n        <td class=\"item-name\"> <p> " + product.name + " <br> (" + product.id + ")</p></td >\n        <td class=\"item-amount\"> <p> " + product.amount + " </p></td >\n        <td class=\"item-price\"> <p> $" + product.price + " </p></td >\n        <td class=\"item-subtotal\"> <p> $" + product.price * product.amount + " </p></td >\n      </tr>\n      ";
        }
        templateHTML = templateHTML.replace("{{date}}", new Date().toLocaleDateString());
        templateHTML = templateHTML.replace("{{receipt_number}}", receiptNumber.toString());
        templateHTML = templateHTML.replace("{{subtotal}}", subtotal.toString());
        templateHTML = templateHTML.replace("{{items}}", items);
        templateHTML = templateHTML.replace("{{tax}}", tax.toString());
        templateHTML = templateHTML.replace("{{total}}", total.toString());
        var filename = userId + "_" + receiptNumber + ".pdf";
        var filePath = path.join(__dirname, "../../static/receipts/", filename);
        console.log(filePath);
        var options = {
            width: '15cm',
            height: '25cm'
        };
        pdf
            .create(templateHTML, options)
            .toFile(filePath, function (err, fileinfo) {
            if (err)
                res.status(400).send(err.message);
            res.download(filePath);
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