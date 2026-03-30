import express from "express";
import config from "./config.js";
import connectDB from "./db.js";
// routes
import userRoutes from "./app/routes/user.router.js";

const app = express();

app.use("/api/v1/users", userRoutes);

const PORT = config?.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server started at localhost:", PORT);
  connectDB();
});