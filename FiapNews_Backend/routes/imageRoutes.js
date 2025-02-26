import express from "express";
import multer from "multer";
import { uploadImage, saveImageMetadata, getImages } from "../controllers/imageController.js";

const router = express.Router();


const storage = multer.memoryStorage();
const upload = multer({ storage });


router.post("/upload", upload.single("file"), uploadImage);
router.post("/save", saveImageMetadata);
router.get("/all", getImages);


export default router;


