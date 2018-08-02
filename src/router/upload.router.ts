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
      // get static folder + route sent from user + file name
      const savePath = path.join(__dirname, "../../static/", route, '/');

      fs.exists(savePath, (flag: boolean) => {
        const filePath = `${route}/${file.name}`;
        console.log(flag);
        if (flag) {
          file.mv(savePath + file.name, (err: any) => {
            if (err) return res.status(500).send(err);
            res.status(200).json({ data: filePath });
          });
        } else {
          fs.mkdir(savePath + file.name, err => {
            if (err) return res.status(500).send(err);
            file.mv(savePath + file.name, (err: any) => {
              if (err) return res.status(500).send(err);
              res.status(200).json({ data: filePath });
            });
          });
        }
      });
    }
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
