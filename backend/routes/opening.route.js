import express from "express";
import { openingList, openingPost, myOpenings, openingEdit, openingDeletion } from "../controllers/opening.controller.js";
import { protect } from '../middleware/auth.middleware.js';
import upload from '../middleware/multer.js';

const router = express.Router();

// Public Routes (Visitors)
router.get("/", openingList);

// Protected Routes (Club Members)
router.get("/my", protect, myOpenings);
router.post("/", protect, upload.single('image'), openingPost);
router.put("/:id", protect, openingEdit);
router.delete("/:id", protect, openingDeletion);

export default router;