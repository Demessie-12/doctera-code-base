import express from "express";
import {
  DeleteProduct,
  EditProduct,
  GetAllProducts,
  GetProductsByCategory,
  GetSingleProduct,
  PostProduct,
} from "../controllers/product.controller.js";
import {
  checkLogin,
  restrictTo,
  restrictToCreatorOr,
} from "../middleware/authController.js";

const router = express.Router();

router.post(
  "/new",
  checkLogin,
  restrictTo("merchant", "admin", "owner"),
  PostProduct
);
router.get("/", GetAllProducts);
router.get("/c/:category", GetProductsByCategory);
router.get("/:ProductID", GetSingleProduct);
router.patch(
  "/:ProductID",
  checkLogin,
  restrictToCreatorOr("admin", "owner"),
  EditProduct
);
router.delete(
  "/:ProductID",
  checkLogin,
  restrictToCreatorOr("admin", "owner"),
  DeleteProduct
);

export default router;
