import express from "express";
import multer from "multer";
import { uploadImage, saveImageMetadata, getImages } from "../controllers/imageController.js";

const router = express.Router();

// 🔥 Configuração do Multer para receber a imagem
const storage = multer.memoryStorage();
const upload = multer({ storage });

// 🔥 Rota POST para upload de imagens (Filestack)
router.post("/upload", upload.single("file"), uploadImage);

// 🔥 Rota POST para salvar metadados (URL, legenda e descrição)
router.post("/save", saveImageMetadata);

// 🔥 Rota GET para listar imagens do banco ordenadas por data
router.get("/all", getImages);


export default router;


