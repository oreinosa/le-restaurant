import { model, Schema, Model, Document } from "mongoose";
import { Product, IProduct } from "./product.model";
Product.schema.path('price').required(false);
Product.schema.path('category').required(false);
Product.schema.path('imageURL').required(false);

const ComboItemSchema: Schema = new Schema({
  product: Product.schema,
  amount: {
    type: Number,
    required: true
  }
});

export interface IComboItem extends Document {
  products: IProduct[];
}

export const ComboItem: Model<IComboItem> = model<IComboItem>(
  "ComboItem",
  ComboItemSchema,
);
