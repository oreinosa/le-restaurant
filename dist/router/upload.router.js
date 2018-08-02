"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var passport_1 = require("../config/passport");
var path = require("path");
var fs = require("fs");
var UploadRouter = (function () {
    function UploadRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    UploadRouter.prototype.uploadFile = function (req, res, next) {
        var route = req.body.route;
        var file = req.files.image;
        if (!file) {
            res.status(400).send("No files were uploaded");
        }
        else {
            var savePath_1 = path.join(__dirname, "../../static/", route, '/');
            fs.exists(savePath_1, function (flag) {
                var filePath = route + "/" + file.name;
                console.log(flag);
                if (flag) {
                    file.mv(savePath_1 + file.name, function (err) {
                        if (err)
                            return res.status(500).send(err);
                        res.status(200).json({ data: filePath });
                    });
                }
                else {
                    fs.mkdir(savePath_1 + file.name, function (err) {
                        if (err)
                            return res.status(500).send(err);
                        file.mv(savePath_1 + file.name, function (err) {
                            if (err)
                                return res.status(500).send(err);
                            res.status(200).json({ data: filePath });
                        });
                    });
                }
            });
        }
    };
    UploadRouter.prototype.routes = function () {
        var requireLogin = passport_1.default.authenticate("auth", { session: false });
        this.router.post("/", requireLogin, this.uploadFile);
    };
    return UploadRouter;
}());
var uploadRoutes = new UploadRouter();
uploadRoutes.routes();
exports.default = uploadRoutes.router;
//# sourceMappingURL=upload.router.js.map