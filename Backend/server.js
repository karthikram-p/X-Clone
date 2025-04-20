import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import connectmongoDB from "./db/connectMongoDB.js";
import { connect } from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectmongoDB();
});
