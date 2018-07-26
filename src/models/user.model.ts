import { model, Schema, Model, Document } from "mongoose";
import { NextFunction } from "connect";

const UserSchema: Schema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: "",
    required: true
  },
  username: {
    type: String,
    default: "",
    required: true,
    unique: true,
    lowercase: true
  },
  email: {
    type: String,
    default: "",
    unique: true,
    required: true
  },
  password: {
    type: String,
    default: "",
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
