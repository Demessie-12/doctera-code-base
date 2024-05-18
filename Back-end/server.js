import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import productRoutes from "./routes/product.routes.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World from server");
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.listen(5005, () => {
  connectToMongoDB();
  console.log("Server Running on PORT 5005");
});
