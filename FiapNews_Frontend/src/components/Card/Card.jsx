import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NewsGrid = styled.div`
    display: flex;
    gap: 30px;
    padding: 20px;
    justify-content: center;
    flex-wrap: wrap; //quebra de linha do conteudo
`;

const NewsCard = styled.div`
    border-radius: 8px;
    width: 20rem;
    border: 1rem;
    border-color: #abb4b4;
    transition: all 0.3s ease; 
    cursor: pointer;  
    &:hover {
    transform: scale(1.05); 
    }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 150px; 
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease; 
    cursor: pointer;  
    &:hover {
      box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.6);
    }
`;

const NewsImage = styled.img`
    width: 100%;
    height: 100%;  // Isso garante que a imagem preencha toda a altura do contêiner
    object-fit: cover;  // A imagem vai cobrir toda a área sem distorcer
    border-radius: 8px;
`;

const NewsTitle = styled.h3`
  position: absolute;
  bottom: 10px; 
  left: 10px;
  right: 10px;
  margin: 0;
  font-size: 1.2em;
  color: #c9dddd;;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const NewsDescription = styled.p`
  font-size: 1em;
  color: #c9dddd;
  margin: 0.5rem;
`;

const NewsCards = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/news/news/1/0/8") // Da 12ª à 19ª notícia type=1
      .then((res) => res.json())
      .then((data) => {
        // Processa cada notícia para extrair a primeira imagem sem sobrescrever outros campos
        const processedData = data.map((news) => ({
          ...news, // Mantém todos os campos originais (incluindo title)
          image: extractFirstImage(news.news), // Extrai a primeira imagem do HTML
        }));
        setNewsData(processedData);
      })
      .catch((err) => console.error("Erro ao buscar notícias:", err));
  }, []);

  // Função para extrair a primeira URL de imagem dentro do campo "news" (HTML)
  const extractFirstImage = (htmlString) => {
    if (!htmlString) return "https://placehold.co/600x400/000000/FFF"; // Caso não tenha HTML
    const match = htmlString.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : "https://placehold.co/600x400/000000/FFF"; // Imagem padrão se não encontrar
  };

  return (
    <NewsGrid>
      {newsData.map((news, index) => (
        <Link to={`/news/${news._id}`} key={news._id} style={{ textDecoration: "none" }}>
          <NewsCard key={index}>
            <ImageContainer>
              <NewsImage src={news.image} alt={news.title} />
            </ImageContainer>
            <NewsDescription>{news.title}</NewsDescription>
          </NewsCard>
          </Link>
      ))}
    </NewsGrid>
  );
};

export default NewsCards;