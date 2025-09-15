import express from "express";
const router = express.Router();
import { getAllClubs, getClubById } from "../controllers/club.controller.js";

router.get("/", getAllClubs);
router.get("/:id", getClubById);

export default router;
