import { model, Schema, Model, Document } from "mongoose";
import { Category, ICategory } from "./category.model";
Category.schema.path('description').required(false);
const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  category: {
    type: Category.schema,
    required: false
  }
});

export interface IProduct extends Document {
  name: string;
  price: number;
  cost: number;
  imageURL: string;
  category: ICategory;
}

export const Product: Model<IProduct> = model<IProduct>(
  "Product",
  ProductSchema,
  "products"
);
