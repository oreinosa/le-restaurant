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
var user_router_1 = require("../router/user.router");
var userRouter = new user_router_1.UserRouter();
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        console.log('config server');
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
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "http://localhost:4200");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
            res.header("Access-Control-Allow-Credentials", "true");
            next();
        });
    };
    Server.prototype.routes = function () {
        var router = express.Router();
        this.app.use("/", router);
        this.app.use("/api/v1/users", userRouter.router);
    };
    return Server;
}());
exports.default = new Server().app;
//# sourceMappingURL=server.js.map