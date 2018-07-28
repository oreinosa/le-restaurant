import { Request, Response, Router } from "express";
import passport from "../config/passport";
import { Category, ICategory } from "../models/category.model";

class CategoryRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public all(req: Request, res: Response): void {
    Category.find({})
      .then((data: ICategory[]) => {
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
    Category.findById(_id)
      .then((data: ICategory) => {
        // if user is found
        if (data) {
          res.status(200).json({ data });
        } else {
          res.status(404).send("Category not found");
        }
      })
      .catch((error: any) => {
        res.status(500).send(error);
      });
  }

  public create(req: Request, res: Response): void {
    const { name, description } = req.body;

    const category = new Category({
      name,
      description,
    });

    if (name && description) {
      Category.create(category)
        .then((category: ICategory) => {
          // category was added successfully
          const data = category;
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
    Category.findByIdAndUpdate(_id, { $set: req.body }, { new: true })
      .then((data: ICategory) => {
        if (data) {
          res.status(200).json({ data });
        } else {
          res.status(404).send('Category not found');
        }
      })
      .catch((error: any) => {
        res.status(400).send(error);
      });
  }

  public delete(req: Request, res: Response): void {
    const { _id } = req.params;

    Category.findByIdAndRemove(_id)
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
      .all(requireAdmin)
      .get(this.all)
      .post(this.create);

    this.router
      .route("/:_id")
      .all(requireAdmin)
      .get(this.one)
      .put(this.update)
      .delete(this.delete);
  }
}

const categoryRoutes = new CategoryRouter();
categoryRoutes.routes();

export default categoryRoutes.router;
