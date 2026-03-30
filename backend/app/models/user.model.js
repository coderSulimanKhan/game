import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  resources: {
    coins: { type: String, min: 0, default: 0 },
    diamonds: { type: String, min: 0, default: 0 },
  },
  buildings: {
    castle: {
      level: { type: Number, min: 1, default: 1 },
    },
    training: {
      level: { type: Number, min: 1, default: 1 }
    },
    tech: {
      level: { type: Number, min: 1, default: 1 }
    }
  },
  isVip: { type: Boolean, default: false },
}, { timestamps: true });

export default model("User", userSchema);