import axios from "axios";
import multer from "multer";
import ImageModel from "../models/images.js";


// 🔥 Configuração do Multer (upload em memória)
const storage = multer.memoryStorage();
const upload = multer({ storage }).single("file");

// 🔥 Função para fazer upload da imagem para o Filestack e salvar no MongoDB
async function uploadImage(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Nenhum arquivo enviado." });
    }

    const apiKey = process.env.FILESTACK_API_KEY;
    const fileBuffer = req.file.buffer;

    // 🔥 Envia a imagem para o Filestack
    const response = await axios.post(
      `https://www.filestackapi.com/api/store/S3?key=${apiKey}`,
      fileBuffer,
      { headers: { "Content-Type": req.file.mimetype } }
    );

    const imageUrl = response.data.url;

    res.json({ success: true, imageUrl });
  } catch (error) {
    console.error("Erro no upload:", error.response?.data || error.message);
    res.status(500).json({ success: false, message: "Erro ao fazer upload." });
  }
}

// 🔥 Função para salvar URL, legenda e descrição no banco
async function saveImageMetadata(req, res) {
  try {
    const { imageUrl, caption, description } = req.body;

    if (!imageUrl || !caption || !description) {
      return res.status(400).json({ success: false, message: "Todos os campos são obrigatórios." });
    }

    const newImage = new ImageModel({ imageUrl, caption, description, createdAt: new Date() });
    await newImage.save();

    res.json({ success: true, message: "Imagem salva com sucesso!" });
  } catch (error) {
    console.error("Erro ao salvar a imagem:", error);
    res.status(500).json({ success: false, message: "Erro ao salvar no banco." });
  }
}

async function getImages(req, res) {
  try {
    const images = await ImageModel.find().sort({ createdAt: -1 }); 
    res.json(images);
  } catch (error) {
    console.error("Erro ao buscar as imagens:", error);
    res.status(500).json({ message: "Erro ao buscar as imagens." });
  }
}


export { uploadImage, saveImageMetadata, getImages, upload };
