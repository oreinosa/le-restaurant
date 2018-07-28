import { model, Schema, Model, Document } from "mongoose";

const CategorySchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
});

export interface ICategory extends Document {
  name: string;
  description: string;
}

export const Category: Model<ICategory> = model<ICategory>(
  "Category",
  CategorySchema,
  "categories"
);
