import express from "express";
import {
  EditOrderStatus,
  EditProductStatus,
  GetAllOrders,
  GetAllUsers,
  GetProductByStatus,
  GetSingleUser,
  GetUsersByCategory,
} from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/users", GetAllUsers);
router.get("/users/c/:category", GetUsersByCategory);
router.get("/users/:username", GetSingleUser);
router.get("/products/status/:status", GetProductByStatus);
router.patch("/products/status/:productId", EditProductStatus);
router.get("/orders", GetAllOrders);
router.patch("/order/:orderId", EditOrderStatus);

export default router;
