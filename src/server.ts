import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import * as mongoose from "mongoose";
import * as logger from "morgan";
import { UserRouter } from "./router/user.router";

const userRouter = new UserRouter();

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
    const MONGO_URI: string =
      "mongodb://ds249311.mlab.com:49311/restaurant";
    mongoose
      .connect(
        MONGO_URI || process.env.MONGODB_URI,
        {
          useNewUrlParser: true,
          auth: {
            user: "dbuser",
            password: "code123"
          }
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

    // cors
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "http://localhost:4200");
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
    const router: express.Router = express.Router();

    this.app.use("/", router);
    this.app.use("/api/v1/users", userRouter.router);
  }
}

// export
export default new Server().app;
