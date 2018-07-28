import { Request, Response, Router } from "express";
import * as fs from 'fs';
import * as path from 'path';
import * as pdf from 'html-pdf';

class ReceiptRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public generateReceipt(req: Request, res: Response): void {
    const { user, total } = req.body;

    const template = path.join(__dirname, '../static/receipts', 'template-test.html');
    const filename = template.replace('.html', '.pdf');
    let templateHTML = fs.readFileSync(template, 'utf8');

    templateHTML = templateHTML.replace('{{user}}', user);
    templateHTML = templateHTML.replace('{{total}}', total);

    const options: pdf.CreateOptions = {
      directory: '/static/receipts'
    };

    pdf
      .create(templateHTML, options)
      .toFile(filename, (err: Error, fileinfo: pdf.FileInfo) => {
        if (err) res.status(400).send(err.message);
        // res.setHeader('Content-Type', 'application/force-download')
        // res.setHeader('Content-disposition', `attachment; filename = ${filename}`)
        res.download(filename);
        // stream.pipe(res);
      })
  }
  // set up our routes
  public routes() {

    this.router
      .route("/")
      .post(this.generateReceipt);
  }
}

const receiptRoutes = new ReceiptRouter();
receiptRoutes.routes();

export default receiptRoutes.router;
