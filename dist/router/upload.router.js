"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var passport_1 = require("../config/passport");
var path = require("path");
var fs = require("fs");
var uuid = require("uuid");
var UploadRouter = (function () {
    function UploadRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    UploadRouter.prototype.uploadFile = function (req, res, next) {
        var _a = req.body, route = _a.route, oldFilePath = _a.oldFilePath;
        var file = req.files.image;
        if (!file) {
            res.status(400).send("No files were uploaded");
        }
        else {
            var savePath = path.join(__dirname, "../../static/", route, '/');
            var flag = fs.existsSync(savePath);
            if (!flag)
                fs.mkdirSync(savePath);
            var id = uuid.v1();
            var typeIndex = file.mimetype.indexOf('/') + 1;
            var fileType = file.mimetype.substr(typeIndex);
            var fileName = id + "." + fileType;
            var filePath_1 = route + "/" + fileName;
            file.mv(savePath + fileName, function (err) {
                if (err)
                    return res.status(500).send(err);
                if (oldFilePath) {
                    req.body.filePath = filePath_1;
                    next();
                }
                else {
                    res.status(200).json({ data: filePath_1 });
                }
            });
        }
    };
    UploadRouter.prototype.deleteFile = function (req, res, next) {
        var _a = req.params, route = _a.route, fileName = _a.fileName;
        var _b = req.body, oldFilePath = _b.oldFilePath, filePath = _b.filePath;
        if (route && fileName) {
            oldFilePath = "/" + route + "/" + fileName;
        }
        var checkPath = path.join(__dirname, '../../static/', oldFilePath);
        var flag = fs.existsSync(checkPath);
        var data = filePath ? filePath : flag ? "File deleted" : "There weren't any files to delete";
        if (!flag) {
            res.status(200).json({ data: data });
        }
        else {
            fs.unlink(checkPath, function (err) {
                if (err)
                    return res.status(500).send(err);
                res.status(200).json({ data: data });
            });
        }
    };
    UploadRouter.prototype.routes = function () {
        var requireLogin = passport_1.default.authenticate("auth", { session: false });
        this.router.post("/", requireLogin, this.uploadFile);
        this.router.put("/", requireLogin, this.uploadFile, this.deleteFile);
        this.router.delete("/:route/:fileName", requireLogin, this.deleteFile);
    };
    return UploadRouter;
}());
var uploadRoutes = new UploadRouter();
uploadRoutes.routes();
exports.default = uploadRoutes.router;
//# sourceMappingURL=upload.router.js.map