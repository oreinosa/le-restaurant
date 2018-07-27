import { model, Schema, Model, Document } from "mongoose";

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    default: "",
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  cost: {
    type: Number,
    required: true
  }
});

export interface IProduct extends Document {
  name: string;
  price: number;
  cost: number;
}

export const Product: Model<IProduct> = model<IProduct>(
  "Product",
  ProductSchema,
  "products"
);
