import express from "express";

import {
  signupUser,
  loginUser,
  logoutUser,
  loginAdmin,
  updateMyProfile,
  updateMyPassword,
} from "../controllers/auth.controllers.js";
import { checkLogin } from "../middleware/authController.js";
const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/loginAdmin", loginAdmin);
router.patch("/profile/:username", checkLogin, updateMyProfile);
router.patch("/password/:username", checkLogin, updateMyPassword);
router.get("/logout", logoutUser);

export default router;
