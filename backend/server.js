import express from "express";
import config from "./config.js";
import connectDB from "./db.js";
import cors from "cors"
// routes
import userRoutes from "./app/routes/user.router.js";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.get("/api/v1/products", (req, res) => {
  res.json({ success: true, message: "I am products" });
});

// routes
app.use("/api/v1/users", userRoutes);

const PORT = config?.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server started at localhost:", PORT);
  connectDB();
});