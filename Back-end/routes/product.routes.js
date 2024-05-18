import express from "express";
import {
  DeleteProduct,
  EditProduct,
  GetAllProducts,
  GetProductsByCategory,
  GetSingleProduct,
  PostProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/new", PostProduct);
router.get("/", GetAllProducts);
router.get("/c/:category", GetProductsByCategory);
router.get("/:ProductID", GetSingleProduct);
router.patch("/:ProductID", EditProduct);
router.delete("/:ProductID", DeleteProduct);

export default router;
