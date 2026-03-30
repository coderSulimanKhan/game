import express from "express";
import config from "./config.js";
import connectDB from "./db.js";

const app = express();

app.get("/", (req, res) => {
  res.json({ success: true, message: "Server is started" });
});

const PORT = config?.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server started at localhost:", PORT);
  connectDB();
});