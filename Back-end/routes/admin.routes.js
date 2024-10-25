import express from "express";
import {
  DeleteProductById,
  EditOrderStatus,
  EditProductStatus,
  EditUserRole,
  GetAllOrders,
  GetAllProductsForAdmin,
  GetAllUsers,
  GetProductByStatus,
  GetSingleOrderDetail,
  GetSingleUser,
  GetUsersByCategory,
} from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/users", GetAllUsers);
router.get("/users/c/:category", GetUsersByCategory);
router.get("/users/:username", GetSingleUser);
router.patch("/users/:username", EditUserRole);

router.get("/products", GetAllProductsForAdmin);
router.get("/products/status/:status", GetProductByStatus);
router.patch("/products/status/:productId", EditProductStatus);
router.delete("/products/delete/:id", DeleteProductById);

router.get("/orders", GetAllOrders);
router.get("/orders/:orderId", GetSingleOrderDetail);
router.patch("/orders/:orderId", EditOrderStatus);

export default router;
