import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  power: { type: Number, default: 0 },
  resources: {
    coins: { type: String, min: 0, default: 1000 },
    diamonds: { type: String, min: 0, default: 100 },
  },
  buildings: {
    castle: {
      level: { type: Number, min: 0, default: 0 },
    },
    train: {
      level: { type: Number, min: 0, default: 0 }
    },
    tech: {
      level: { type: Number, min: 0, default: 0 }
    }
  },
  isVip: { type: Boolean, default: false },
  vipPoints: { type: Number, min: 0, max: 18000, default: 0 },
  image: { type: String, default: "/pages/HomePage/profile.svg" },
  achievements: [{ name: { type: String }, image: String }]
}, { timestamps: true });

export default model("User", userSchema);