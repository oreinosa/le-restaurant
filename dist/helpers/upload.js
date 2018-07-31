"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
function uploadImage(req, res, next) {
    var route = req.body.route;
    var file = req.files.image;
    if (!file) {
        next("No files were uploaded");
    }
    else {
        var fileName = file.name.replace(/ /g, "_");
        var staticPath_1 = route + "/" + fileName;
        var savePath = path.join(__dirname, "../static/", staticPath_1);
        file.mv(savePath, function (err) {
            if (err)
                next(err);
            req.body.imageURL = staticPath_1;
            next();
        });
    }
}
exports.uploadImage = uploadImage;
//# sourceMappingURL=upload.js.map