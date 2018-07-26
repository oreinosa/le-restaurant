import { Request, Response, Router } from "express";
import { User } from "../models/user.model";
import passport from "../config/passport";

class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public all(req: Request, res: Response): void {
    User.find({}, { password: 0 })
      .then(data => {
        return res.status(200).json({ data });
      })
      .catch(error => {
        res.status(500).json({ error });
        return error;
      });
  }

  public one(req: Request, res: Response): void {
    const { username } = req.params;

    User.findOne({ username })
      .then(data => {
        res.status(200).json({ data });
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  }

  public create(req: Request, res: Response): void {
    const { firstName, lastName, username, email, password } = req.body;

    const user = new User({
      firstName,
      lastName,
      username,
      email,
      password
    });

    user
      .save()
      .then(data => {
        res.status(201).json({ data });
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  }

  public update(req: Request, res: Response): void {
    const { username } = req.params;

    User.findOneAndUpdate({ username }, { $set: req.body }, { new: true })
      .then(data => {
        res.status(200).json({ data });
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  }

  public delete(req: Request, res: Response): void {
    const { username } = req.params;

    User.findOneAndRemove({ username })
      .then(() => {
        res.status(204).end();
      })
      .catch(error => {
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
      .put(this.update)
      .delete(this.delete);
  }
}

const userRoutes = new UserRouter();
userRoutes.routes();

export default userRoutes.router;
