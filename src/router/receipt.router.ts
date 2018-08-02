import { Request, Response, Router } from "express";
import * as fs from "fs";
import * as path from "path";
import * as pdf from "html-pdf";

class ReceiptRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public generateReceipt(req: Request, res: Response): void {
    const { user, subtotal } = req.body;
    let products: any[] = [
      { id: "abc", name: "Pilsener", amount: 6, price: 1 },
      { id: "abc", name: "Pilsener", amount: 6, price: 1 },
      { id: "abc", name: "Golden", amount: 6, price: 1 }
    ];
    const templatePath = path.join(__dirname, "../../static/receipts");
    const filename = templatePath.replace(".html", ".pdf"); // filename will be .pdf
    let templateHTML = fs.readFileSync(templatePath, "utf8"); // read file (readfileSync converts file to string)
    console.log(filename);
    let items = "";
    for (let product of products) {
      items += `
      <tr class="service">
          <td class="tableitem"> <p class="itemtext"> ${product.name} <br> (${product.id})</p></td >
          <td class="tableitem"> <p class="itemtext"> ${product.amount} </p></td >
          <td class="tableitem"> <p class="itemtext"> $${product.price} </p></td >
        </tr>
      `;
    }
    const tip: number = subtotal * 0.1;
    const total: number = subtotal + tip;
    templateHTML = templateHTML.replace("{{subtotal}}", subtotal); // replace items string
    templateHTML = templateHTML.replace("{{items}}", items); // replace items string
    templateHTML = templateHTML.replace("{{tip}}", tip.toString()); // replace items string
    templateHTML = templateHTML.replace("{{total}}", total.toString()); // replace items string

    const options: pdf.CreateOptions = {
      directory: "static/receipts" // save in receipts
    };

    pdf
      .create(templateHTML, options)
      .toFile(filename, (err: Error, fileinfo: pdf.FileInfo) => {
        if (err) res.status(400).send(err.message);
        // res.setHeader('Content-Type', 'application/force-download')
        // res.setHeader('Content-disposition', `attachment; filename = ${filename}`)
        res.download(filename);
        // stream.pipe(res);
      });
  }
  // set up our routes
  public routes() {
    this.router.route("/").post(this.generateReceipt);
  }
}

const receiptRoutes = new ReceiptRouter();
receiptRoutes.routes();

export default receiptRoutes.router;
