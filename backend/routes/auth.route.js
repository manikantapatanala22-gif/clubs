import express from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { adminAuth } from "../middleware/adminAuth.middleware.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/logout", protect, logoutUser);

export default router;
