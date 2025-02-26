import express from "express";
import videoNewsModel from "../models/videosNews.js";
 

const router = express.Router();


router.get("/videos", async (req, res) => {
    try {
      const newsList = await videoNewsModel.find() 
      console.log("Dados encontrados:", newsList); 
      res.json(newsList);
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
      res.status(500).json({ message: "Erro ao buscar notícias", error });
    }
  });
  




  router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const newsItem = await videoNewsModel.findOne({ _id: id });

        if (!newsItem) {
            return res.status(404).json({ error: "Notícia não encontrada" });
        }

        res.json(newsItem);
    } catch (error) {
        console.error("Erro ao buscar notícia:", error);
        res.status(500).json({ error: "Erro ao buscar notícia" });
    }
});
  


 
router.post("/add", async (req, res) => {
    try {
      const { type, date, title, summary, urlVideo} = req.body;
  
      // Verifica se todos os campos foram preenchidos
      if (!type || !date || !title || !summary || !urlVideo) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
      }
  
      // Cria a nova notícia no banco
      const videoRoutes = new videoNewsModel({
        type,
        date,
        title,
        summary,
        urlVideo
      });
  
      await videoRoutes.save();
      res.status(201).json({ message: "Notícia cadastrada com sucesso!" });
    } catch (error) {
      console.error("Erro ao cadastrar notícia:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  });
  
  export default router;