import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import startRoutes from "./Back-end/routes/start.routes.js";
import authRoutes from "./Back-end/routes/auth.routes.js";
import connectToMongoDB from "./Back-end/db/connectToMongoDB.js";
import productRoutes from "./Back-end/routes/product.routes.js";
import adminRoutes from "./Back-end/routes/admin.routes.js";
import orderRoutes from "./Back-end/routes/order.routes.js";
import reviewRoutes from "./Back-end/routes/review.route.js";
import {
  checkLogin,
  restrictTo,
} from "./Back-end/middleware/authController.js";
import PaymnetRoutes from "./Back-end/routes/payment.route.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
// app.use(
//   cors({
//     origin: "http://localhost:5173", // Change to your frontend's URL
//     credentials: true, // Allow credentials (cookies, authorization headers, etc.)
//   })
// );
// app.use(
//   cors({
//     origin: "https://localhost:5173/",
//     credentials: true,
//   })
// );

if (process.env.NODE_ENV === "production") {
  app.use(
    cors({
      origin: "https://xyz.onrender.com", // Doctera website
      credentials: true,
    })
  );
}

app.get("/", (req, res) => {
  res.send("Hello World from server");
});

app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "http://localhost:5173",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "*",
  });

  next();
});

app.use("/api/start", startRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/payments", PaymnetRoutes);
app.use(
  "/api/admin",
  checkLogin,
  restrictTo("admin", "super admin"),
  adminRoutes
);
app.use("/api/contributor", checkLogin, restrictTo("contributor"), contri);

app.listen(5005, () => {
  connectToMongoDB();
  console.log("Server Running on PORT 5005");
});
