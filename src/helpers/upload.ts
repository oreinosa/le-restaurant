import { Request, Response, NextFunction } from "express";
import * as fileUpload from "express-fileupload";
import * as path from "path";

export function uploadImage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { route } = req.body;
  const file = req.files.image as fileUpload.UploadedFile; // get only file sent
  // console.log(req.files);

  if (!file) {
    next("No files were uploaded");
  } else {
    // replace spaces with _
    const fileName = file.name.replace(/ /g, "_");
    // get static folder + route sent from user + file name
    const staticPath = `${route}/${fileName}`;
    const savePath = path.join(__dirname, "../static/", staticPath);

    file.mv(savePath, (err: any) => {
      if (err) next(err);
      req.body.imageURL = staticPath;
      next();
    });
  }
}
