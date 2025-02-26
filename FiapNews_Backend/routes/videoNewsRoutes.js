import express from "express";
import { getAllVideoNews, getVideoNewsById, addVideoNews } from "../controllers/videoNewsController.js";

const router = express.Router();

router.get("/videos", getAllVideoNews);
router.get("/:id", getVideoNewsById);
router.post("/add", addVideoNews);

export default router;
