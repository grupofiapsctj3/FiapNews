import express from "express";
import textNewsModel from "../models/textNews.js";
 

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const news = await textNewsModel.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ error: "Notícia não encontrada" });
    }
    res.json(news);
  } catch (error) {
    console.error("Erro ao buscar notícia:", error);
    res.status(500).json({ error: "Erro no servidor" });
  }
});


router.get("/news", async (req, res) => {
  try {
    const newsList = await textNewsModel.find(); 
    res.json(newsList);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar notícias", error });
  }
});

router.get("/news/:type/:skip/:limit", async (req, res) => {
  try {
    const { type, skip, limit } = req.params;
    const newsList = await textNewsModel
      .find({ type })
      .sort({ date: -1 }) 
      .skip(Number(skip))
      .limit(Number(limit));

    res.json(newsList);
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    res.status(500).json({ error: "Erro ao buscar notícias" });
  }
});


router.post("/add", async (req, res) => {
  try {
    const { type, date, title, briefTitle, subTitle, briefSubTitle, summary, news } = req.body;

    // Verifica se todos os campos foram preenchidos
    if (!type || !date || !title || !briefTitle || !subTitle || !briefSubTitle || !summary || !news) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
    }

    // Cria a nova notícia no banco
    const newNews = new textNewsModel({
      type,
      date,
      title,
      briefTitle,
      subTitle,
      briefSubTitle,
      summary,
      news
    });

    await newNews.save();
    res.status(201).json({ message: "Notícia cadastrada com sucesso!" });
  } catch (error) {
    console.error("Erro ao cadastrar notícia:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

export default router;