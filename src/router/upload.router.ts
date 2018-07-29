import { Request, Response, Router } from "express";
import passport from "../config/passport";
import * as fileUpload from 'express-fileupload';
import * as path from 'path';
import * as fs from 'fs';

class UploadRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public uploadFile(req: Request, res: Response): void {
    const {
      route,
    } = req.body;

    const file = req.files.image as fileUpload.UploadedFile; // get only file sent

    if (!file) {
      res.status(400).send('No files were uploaded');
    } else {
      const savePath = path.join(__dirname, '../static/', route, '/');
      if (!fs.existsSync(savePath)) {
        fs.mkdirSync(savePath);
      }
      file.mv(savePath + file.name, (err: any) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({ data: 'File uploaded' });
      })
    }
  }

  // set up our routes
  public routes() {
    const requireAdmin = passport.authenticate("admin", { session: false });
    this.router.post('/', requireAdmin, this.uploadFile);
  }
}

const uploadRoutes = new UploadRouter();
uploadRoutes.routes();

export default uploadRoutes.router;
