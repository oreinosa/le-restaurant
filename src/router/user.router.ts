import { Request, Response, Router } from "express";
import { User, IUser } from "../models/user.model";
import passport from "../config/passport";
import { hashPassword } from "./auth.router";

class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public all(req: Request, res: Response): void {
    User.find({}, { password: 0 })
      .then((data: IUser[]) => {
        return res.status(200).json({ data });
      })
      .catch((error: any) => {
        res.status(500).json({ error });
        return error;
      });
  }

  public one(req: Request, res: Response): void {
    const { username } = req.params;

    User.findOne({ username }, { password: 0 })
      .then(data => {
        res.status(200).json({ data });
      })
      .catch((error: any) => {
        res.status(500).json({ error });
      });
  }

  public create(req: Request, res: Response): void {
    const { name, username, email, password } = req.body;

    const user = new User({
      name,
      username,
      email,
      password
    });
    hashPassword(user) // hash user's password before saving
      .then(() => {
        // once password has been hashed
        return User.create(user)
          .then(() => {
            // user was added successfully
            user.password = undefined;
            const data = user;
            res.status(201).json({ data });
          })
          .catch((_error: any) => {
            // error when newUser required properties may be missing
            let error: string = " already in use"; // start message for "already in use"
            let message: string = _error.message; // get error message which will contain duplicate property
            if (message.indexOf("username") >= 0) {
              // if duplicate property is username
              error = "Username" + error;
            } else if (message.indexOf("email") >= 0) {
              // if duplicate property is email
              error = "Email" + error;
            }
            res.status(400).send(error);
          });
      })
      .catch((error: any) => res.status(500).json({ error })); // if there's a problem hashing password
  }

  public update(req: Request, res: Response): void {
    const { username } = req.params;
    User.findOneAndUpdate({ username }, { $set: req.body }, { new: true })
      .then((data: IUser) => {
        data.password = undefined;
        // delete data.password;
        // console.log(data);
        res.status(200).json({ data });
      })
      .catch((_error: any) => {
        // error when newUser required properties may be missing
        let error: string = " already in use"; // start message for "already in use"
        let message: string = _error.message; // get error message which will contain duplicate property
        if (message.indexOf("username") >= 0) {
          // if duplicate property is username
          error = "Username" + error;
        } else if (message.indexOf("email") >= 0) {
          // if duplicate property is email
          error = "Email" + error;
        }
        res.status(400).send(error);
      });
  }

  public delete(req: Request, res: Response): void {
    const { username } = req.params;

    User.findOneAndRemove({ username })
      .then(() => {
        res.status(204).end();
      })
      .catch((error: any) => {
        res.status(500).json({ error });
      });
  }

  // set up our routes
  public routes() {
    const requireAdmin = passport.authenticate("admin", { session: false });

    this.router
      .route("/")
      .all(requireAdmin)
      .get(this.all)
      .post(this.create);

    this.router
      .route("/:username")
      .all(requireAdmin)
      .get(this.one)
      .put(this.update)
      .delete(this.delete);
  }
}

const userRoutes = new UserRouter();
userRoutes.routes();

export default userRoutes.router;
