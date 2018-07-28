import { model, Schema, Model, Document } from "mongoose";

const UserSchema: Schema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "Customer"
  }
});

export interface IUser extends Document {
  createdAt: Date;
  name: string;
  username: string;
  email: string;
  password: string;
  role: string;
}

export const User: Model<IUser> = model<IUser>("User", UserSchema, "users");
