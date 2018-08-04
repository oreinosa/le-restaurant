import { Request, Response, Router, NextFunction } from "express";
import passport from "../config/passport";
import * as fileUpload from "express-fileupload";
import * as path from "path";
import * as fs from "fs";
import * as uuid from "uuid";

class UploadRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public uploadFile(req: Request, res: Response, next: NextFunction): void {
    const { route, oldFilePath } = req.body;
    const file = req.files.image as fileUpload.UploadedFile; // get only file sent

    if (!file) {
      res.status(400).send("No files were uploaded");
    } else {
      // get static folder + route sent from user + file name
      const savePath = path.join(__dirname, "../../static/", route, '/');
      // console.log(file);

      // CHECK IF FOLDER EXISTS
      const flag = fs.existsSync(savePath);
      // console.log(flag);
      // IF IT DOESN'T IT'LL BE CREATED
      if (!flag) fs.mkdirSync(savePath);

      const id = uuid.v1();
      const typeIndex = file.mimetype.indexOf('/') + 1;
      const fileType = file.mimetype.substr(typeIndex);
      const fileName = `${id}.${fileType}`;
      const filePath = `${route}/${fileName}`;
      // console.log(filePath);
      // FILE IS SAVED 
      file.mv(savePath + fileName, (err: any) => {
        if (err) return res.status(500).send(err);
        if (oldFilePath) {
          // console.log('next : deleteFile');
          req.body.filePath = filePath;
          next();
        } else {
          res.status(200).json({ data: filePath });
        }
      });
    }
  }

  public deleteFile(req: Request, res: Response, next: NextFunction): void {
    const { route, fileName } = req.params;
    let { oldFilePath, filePath } = req.body;
    if (route && fileName) {
      oldFilePath = `/${route}/${fileName}`;
    }
    const checkPath = path.join(__dirname, '../../static/', oldFilePath);
    const flag = fs.existsSync(checkPath);
    // console.log('checking for ', checkPath);
    // console.log('exists ? ', flag);
    const data = filePath ? filePath : flag ? "File deleted" : "There weren't any files to delete";
    if (!flag) {
      res.status(200).json({ data });
    } else {
      fs.unlink(checkPath, (err) => {
        if (err) return res.status(500).send(err);
        // console.log(`${checkPath} was deleted`);
        res.status(200).json({ data });
      });
    }

  }

  // set up our routes
  public routes() {
    const requireLogin = passport.authenticate("auth", { session: false });
    this.router.post("/", requireLogin, this.uploadFile);
    this.router.put("/", requireLogin, this.uploadFile, this.deleteFile);
    this.router.delete("/:route/:fileName", requireLogin, this.deleteFile);
  }
}

const uploadRoutes = new UploadRouter();
uploadRoutes.routes();

export default uploadRoutes.router;
