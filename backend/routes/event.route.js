import express from "express";
import {eventsList, eventsPost, eventEdit, eventDeletion} from "../controllers/event.controller.js";
const router = express.Router();


router.get("/",eventsList);
router.post("/",eventsPost);
router.put("/:id",eventEdit)
router.delete("/:id",eventDeletion);


export default router