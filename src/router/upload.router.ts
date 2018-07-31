import { Request, Response, Router, NextFunction } from "express";
import passport from "../config/passport";
import * as fileUpload from "express-fileupload";
import * as path from "path";
import * as fs from "fs";

class UploadRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public uploadFile(req: Request, res: Response, next: NextFunction): void {
    const { route } = req.body;
    const file = req.files.image as fileUpload.UploadedFile; // get only file sent

    if (!file) {
      res.status(400).send("No files were uploaded");
    } else {
      // replace spaces with _
      const fileName = file.name.replace(" ", "_");
      // get static folder + route sent from user + file name
      const staticPath = `static/${route}/${fileName}`;
      const savePath = path.join(__dirname, "../", staticPath);

      file.mv(savePath, (err: any) => {
        if (err) next(err);
        next(savePath);
        // if (err) return res.status(500).send(err);
        // res.status(200).json({ data: staticPath });
      });

      // fs.exists(savePath, (flag: boolean) => {
      //   fs.mkdir(savePath, err => {
      //     if (err) return res.status(500).send(err);

      //   });
      // });
    }
    next();
  }

  // set up our routes
  public routes() {
    const requireLogin = passport.authenticate("auth", { session: false });
    this.router.post("/", requireLogin, this.uploadFile);
  }
}

const uploadRoutes = new UploadRouter();
uploadRoutes.routes();

export default uploadRoutes.router;
