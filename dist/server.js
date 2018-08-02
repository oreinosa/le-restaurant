"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var compression = require("compression");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var express = require("express");
var helmet = require("helmet");
var mongoose = require("mongoose");
var logger = require("morgan");
var passport_1 = require("passport");
var UserRouter = require("./router/user.router");
var AuthRouter = require("./router/auth.router");
var ProductRouter = require("./router/product.router");
var CategoryRouter = require("./router/category.router");
var ComboRouter = require("./router/combo.router");
var ReceiptRouter = require("./router/receipt.router");
var UploadRouter = require("./router/upload.router");
var fileUpload = require("express-fileupload");
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        console.log("config server");
        var MONGO_URI = "mongodb://localhost:27017/restaurant";
        mongoose
            .connect(MONGO_URI || process.env.MONGODB_URI, {
            useNewUrlParser: true
        })
            .then(function () { return console.log("Connected succesfully to DB " + MONGO_URI); })
            .catch(function (err) { return console.log("ERROR ", err); });
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(logger("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(passport_1.initialize());
        this.app.use(passport_1.session());
        var fileUploadConfig = {};
        this.app.use(fileUpload(fileUploadConfig));
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
            res.header("Access-Control-Allow-Credentials", "true");
            next();
        });
    };
    Server.prototype.routes = function () {
        this.app.use("/api/v1/users", UserRouter.default);
        this.app.use("/api/v1/auth", AuthRouter.default);
        this.app.use("/api/v1/products", ProductRouter.default);
        this.app.use("/api/v1/categories", CategoryRouter.default);
        this.app.use("/api/v1/combos", ComboRouter.default);
        this.app.use("/api/v1/receipt", ReceiptRouter.default);
        this.app.use("/api/v1/upload", UploadRouter.default);
    };
    return Server;
}());
exports.default = new Server().app;
//# sourceMappingURL=server.js.map