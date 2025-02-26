import express from "express";
import { getNewsById, getAllNews, getPaginatedNews, addNews } from "../controllers/textNewsController.js";

const router = express.Router();

router.get("/:id", getNewsById);
router.get("/news", getAllNews);
router.get("/news/:type/:skip/:limit", getPaginatedNews);
router.post("/add", addNews);

export default router;
