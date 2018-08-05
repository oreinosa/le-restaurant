import { Category } from './../models/category.model';
import { Request, Response, Router } from "express";
import passport from "../config/passport";
import { Combo, ICombo } from "../models/combo.model";

class ComboRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public all(req: Request, res: Response): void {
    Combo.find({})
      .then((data: ICombo[]) => {
        // if users are found
        return res.status(200).json({ data });
      })
      .catch((error: any) => {
        res.status(500).send(error);
        return error;
      });
  }

  public one(req: Request, res: Response): void {
    const { _id } = req.params;
    Combo.findById(_id)
      .then((data: ICombo) => {
        // if user is found
        if (data) {
          res.status(200).json({ data });
        } else {
          res.status(404).send("Combo not found");
        }
      })
      .catch((error: any) => {
        res.status(500).send(error);
      });
  }

  public create(req: Request, res: Response): void {
    const { items, price } = req.body;
    console.log(req.body);
    if (price && items && items instanceof Array && items.length) {
      const combo = new Combo(req.body);

      Combo.create(combo)
        .then((combo: ICombo) => {
          // combo was added successfully
          const data = combo;
          res.status(201).json({ data });
        })
        .catch((error: any) => {
          res.status(400).send(error);
        });
    } else {
      res.status(400).send("Missing fields");
    }
  }

  public update(req: Request, res: Response): void {
    const { _id } = req.params;
    Combo.findByIdAndUpdate(_id, { $set: req.body }, { new: true })
      .then((data: ICombo) => {
        if (data) {
          res.status(200).json({ data });
        } else {
          res.status(404).send('Combo not found');
        }
      })
      .catch((error: any) => {
        res.status(400).send(error);
      });
  }

  public delete(req: Request, res: Response): void {
    const { _id } = req.params;

    Combo.findByIdAndRemove(_id)
      .then(() => {
        res.status(204).end();
      })
      .catch((error: any) => {
        res.status(500).send(error);
      });
  }

  // set up our routes
  public routes() {
    const requireAdmin = passport.authenticate("admin", { session: false });

    this.router
      .route("/")
      .get(this.all)
      .all(requireAdmin)
      .post(this.create);

    this.router
      .route("/:_id")
      .get(this.one)
      .all(requireAdmin)
      .put(this.update)
      .delete(this.delete);
  }
}

const comboRoutes = new ComboRouter();
comboRoutes.routes();

export default comboRoutes.router;
