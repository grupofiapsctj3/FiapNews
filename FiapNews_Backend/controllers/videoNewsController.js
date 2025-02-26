import videoNewsModel from "../models/videosNews.js";

export const getAllVideoNews = async (req, res) => {
  try {
    const newsList = await videoNewsModel.find();
    console.log("Dados encontrados:", newsList);
    res.json(newsList);
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    res.status(500).json({ message: "Erro ao buscar notícias", error });
  }
};

export const getVideoNewsById = async (req, res) => {
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
};

export const addVideoNews = async (req, res) => {
  try {
    const { type, date, title, summary, urlVideo } = req.body;

    if (!type || !date || !title || !summary || !urlVideo) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
    }

    const newVideoNews = new videoNewsModel({
      type,
      date,
      title,
      summary,
      urlVideo,
    });

    await newVideoNews.save();
    res.status(201).json({ message: "Notícia cadastrada com sucesso!" });
  } catch (error) {
    console.error("Erro ao cadastrar notícia:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
