import { model, Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    default: '',
    required: true,
  },
  username: {
    type: String,
    default: '',
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    default: '',
    required: true,
  },
  password: {
    type: String,
    default: '',
    required: true,
  }
});

export default model('User', UserSchema);
