import textNewsModel from "../models/textNews.js";

export const getNewsById = async (req, res) => {
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
};

export const getAllNews = async (req, res) => {
  try {
    const newsList = await textNewsModel.find();
    res.json(newsList);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar notícias", error });
  }
};

export const getPaginatedNews = async (req, res) => {
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
};

export const addNews = async (req, res) => {
  try {
    const { type, date, title, briefTitle, subTitle, briefSubTitle, summary, news } = req.body;

    if (!type || !date || !title || !briefTitle || !subTitle || !briefSubTitle || !summary || !news) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
    }

    const newNews = new textNewsModel({
      type,
      date,
      title,
      briefTitle,
      subTitle,
      briefSubTitle,
      summary,
      news,
    });

    await newNews.save();
    res.status(201).json({ message: "Notícia cadastrada com sucesso!" });
  } catch (error) {
    console.error("Erro ao cadastrar notícia:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
