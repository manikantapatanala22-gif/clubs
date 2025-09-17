import express from "express";
import { eventsList, eventsPost, myEvents, eventEdit, eventDeletion } from "../controllers/event.controller.js";
import { protect } from '../middleware/auth.middleware.js';
import upload from '../middleware/multer.js';

const router = express.Router();

// Public Routes (Visitors)
router.get("/", eventsList);

// Protected Routes (Club Members)
router.get("/my", protect, myEvents);
router.post("/", protect, upload.single('eventImage'), eventsPost);
router.put("/:id", protect, eventEdit);
router.delete("/:id", protect, eventDeletion);

export default router;