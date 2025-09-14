import express from "express";
const router = express.Router();
import { getAllClubs } from "../controllers/club.controller.js";

router.get("/", getAllClubs);

export default router;
