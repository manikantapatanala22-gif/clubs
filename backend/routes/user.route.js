import express from "express";
const router = express.Router();
import {
  getAdmins,
  getByUsername,
  editByUsername,
  deleteByUsername,
  createNewAdmin
} from "../controllers/user.controller.js";

router.get("/", getAdmins);
router.post("/",createNewAdmin);
router.get("/:username", getByUsername);
router.put("/:username", editByUsername);
router.delete("/:username",deleteByUsername);

export default router;
