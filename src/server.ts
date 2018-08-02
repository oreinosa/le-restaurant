import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import * as mongoose from "mongoose";
import * as logger from "morgan";
import {
  session as passportSession,
  initialize as passportInitialize
} from "passport";
import * as UserRouter from "./router/user.router";
import * as AuthRouter from "./router/auth.router";
import * as ProductRouter from "./router/product.router";
import * as CategoryRouter from "./router/category.router";
import * as ComboRouter from "./router/combo.router";
import * as ReceiptRouter from "./router/receipt.router";
import * as UploadRouter from "./router/upload.router";
import * as fileUpload from "express-fileupload";

class Server {
  // set app to be of type express.Application
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  // application config
  public config(): void {
    console.log("config server");
    const MONGO_URI: string = "mongodb://localhost:27017/restaurant";
    mongoose
      .connect(
        MONGO_URI || process.env.MONGODB_URI,
        {
          useNewUrlParser: true
        }
      )
      .then(() => console.log(`Connected succesfully to DB ${MONGO_URI}`))
      .catch(err => console.log("ERROR ", err));

    // express middleware
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(logger("dev"));
    this.app.use(compression());
    this.app.use(helmet());

    this.app.use(cors());

    this.app.use(passportInitialize());
    this.app.use(passportSession());

    const fileUploadConfig: fileUpload.Options = {};

    this.app.use(fileUpload(fileUploadConfig));
    this.app.use((req, res, next) => {
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
      );
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
      );
      res.header("Access-Control-Allow-Credentials", "true");
      next();
    });
  }

  // application routes
  public routes(): void {
    this.app.use("/api/v1/users", UserRouter.default);
    this.app.use("/api/v1/auth", AuthRouter.default);
    this.app.use("/api/v1/products", ProductRouter.default);
    this.app.use("/api/v1/categories", CategoryRouter.default);
    this.app.use("/api/v1/combos", ComboRouter.default);
    this.app.use("/api/v1/receipt", ReceiptRouter.default);
    this.app.use("/api/v1/upload", UploadRouter.default);
  }
}

// export
export default new Server().app;
