import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import imageRoutes from "./routes/imageRoutes.js";
import newNews from "./routes/textNewsRoute.js";
import videosRoutes from "./routes/videoNewsRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/images", imageRoutes);
app.use("/api/news", newNews);
app.use("/api/videos", videosRoutes);


mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
