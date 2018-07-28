import { model, Schema, Model, Document } from "mongoose";
import { Product, IProduct } from "./product.model";
Product.schema.path('category').required(false);

const ComboSchema: Schema = new Schema({
  products: [Product.schema]
});

export interface ICombo extends Document {
  products: IProduct[];
}

export const Combo: Model<ICombo> = model<ICombo>(
  "Combo",
  ComboSchema,
  "combos"
);
