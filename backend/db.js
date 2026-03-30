import { connect } from "mongoose";
import config from "./config.js";

const connectDB = async () => {
  try {
    const conn = await connect(config.MONGO_URI);
    console.log(config.MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Failed to connect database");
    process.exit(1);
    console.log(error);
  }
};

export default connectDB;