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
    const { userId, receiptNumber, subtotal, tax, total } = req.body;
    let products: any[] = [
      { id: "abc", name: "Pilsener", amount: 6, price: 1 },
      { id: "abc", name: "Pilsener", amount: 6, price: 1 },
      { id: "abc", name: "Golden", amount: 6, price: 1 }
    ];
    const templatePath = path.join(__dirname, "../../static/templates/receipt.html");
    let templateHTML = fs.readFileSync(templatePath, "utf8"); // read file (readfileSync converts file to string)
    let items = "";
    for (let product of products) {
      items += `
      <tr class='text-center'>
        <td class="item-name"> <p> ${product.name} <br> (${product.id})</p></td >
        <td class="item-amount"> <p> ${product.amount} </p></td >
        <td class="item-price"> <p> $${product.price} </p></td >
        <td class="item-subtotal"> <p> $${product.price * product.amount} </p></td >
      </tr>
      `;
    }
    templateHTML = templateHTML.replace("{{date}}", new Date().toLocaleDateString()); // replace items string
    templateHTML = templateHTML.replace("{{receipt_number}}", receiptNumber.toString()); // replace items string
    templateHTML = templateHTML.replace("{{subtotal}}", subtotal.toString()); // replace items string
    templateHTML = templateHTML.replace("{{items}}", items); // replace items string
    templateHTML = templateHTML.replace("{{tax}}", tax.toString()); // replace items string
    templateHTML = templateHTML.replace("{{total}}", total.toString()); // replace items string

    const filename = `${userId}_${receiptNumber}.pdf`; // filename will be .pdf
    const filePath = path.join(__dirname, "../../static/receipts/", filename);
    console.log(filePath);
    const options: pdf.CreateOptions = {
      width: '15cm',
      height: '25cm'
    }
    pdf
      .create(templateHTML, options)
      .toFile(filePath, (err: Error, fileinfo: pdf.FileInfo) => {
        if (err) res.status(400).send(err.message);
        // res.setHeader('Content-Type', 'application/force-download')
        // res.setHeader('Content-disposition', `attachment; filename = ${filename}`)
        res.download(filePath);
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
