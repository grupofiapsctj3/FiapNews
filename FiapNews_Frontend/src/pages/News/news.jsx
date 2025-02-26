import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Container = styled.div`
  padding: 100px;
  background: linear-gradient(90deg, rgba(8,10,11,1) 0%, rgba(24,28,31,1) 35%, rgba(38,42,45,1) 100%);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    max-width: 800px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 0.5rem;
    display: block;
  }

  figure {
    text-align: center;
    margin: 20px 0;
  }

  figcaption {
    font-size: 0.9rem;
    color: #777;
    font-style: italic;
    margin-top: 5px;
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #c9dddd;
  text-align: left;
  max-width: 800px;
  margin-bottom: 1rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  color: #666;
  text-align: left;
  max-width: 700px;
  margin-bottom: 2rem;
`;

const DateText = styled.p`
  font-size: 0.8rem;
  color: #999;
  text-align: left;
  margin-bottom: 0.5rem;
`;

const Image1 = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 0.5rem;
`;

const Image1Description = styled.p`
  font-size: 0.9rem;
  color: #777;
  text-align: left;
  max-width: 700px;
  font-style: italic;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #444;
  line-height: 1.6;
  text-align: justify;
  max-width: 800px;
  margin-top: 1rem;
  padding: 0 1rem;

  @media (max-width: 600px) {
    font-size: 1rem;
    text-align: left;
  }
`;

const News = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/news/${id}`);
        setNews(response.data);
      } catch (error) {
        console.error("Erro ao buscar notícia:", error);
        setError("Erro ao carregar notícia.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  const formatDate = (dateString) => {
    if (!dateString) return "Data indisponível";
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!news) return <p>Notícia não encontrada.</p>;

  return (
    <Container>
      <PageContainer>
        <Title>{news.title}</Title>
        <SubTitle>{news.subTitle}</SubTitle>
        <DateText>Publicado em: {formatDate(news.date)}</DateText>
        <Image1 src={news.imagemUrl} alt={news.title} />
        <Image1Description>{news.legendaImagem}</Image1Description>
        <Text dangerouslySetInnerHTML={{ __html: news.news }} />
      </PageContainer>
    </Container>
  );
};

export default News;
