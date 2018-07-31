"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var passport_1 = require("../config/passport");
var path = require("path");
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
            var fileName = file.name.replace(" ", "_");
            var staticPath = "static/" + route + "/" + fileName;
            var savePath_1 = path.join(__dirname, "../", staticPath);
            file.mv(savePath_1, function (err) {
                if (err)
                    next(err);
                next(savePath_1);
            });
        }
        next();
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