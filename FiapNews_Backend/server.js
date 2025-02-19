/*import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import imageRoutes from "./routes/imageRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING);

// Usando as rotas
app.use("/api", imageRoutes);

app.listen(5000, () => console.log("Servidor rodando na porta 5000"));
*/
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import imageRoutes from "./routes/imageRoutes.js";
import newNews from "./routes/textNewsRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


// 🔥 Importando as rotas da API
app.use("/api/images", imageRoutes);
app.use("/api/news", newNews);
//app.use("/api", textNewsRoute);

// Conexão com o banco de dados MongoDB
mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => console.log("🟢 Conectado ao MongoDB"))
  .catch((err) => console.error("🔴 Erro ao conectar ao MongoDB:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
