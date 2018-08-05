import { model, Schema, Model, Document } from "mongoose";
import { ComboItem, IComboItem } from "./combo-item.model";

const ComboSchema: Schema = new Schema({
  items: [ComboItem.schema],
  price: {
    type: Number,
    required: true,
  }
});

export interface ICombo extends Document {
  items: IComboItem[];
}

export const Combo: Model<ICombo> = model<ICombo>(
  "Combo",
  ComboSchema,
  "combos"
);
