import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Background from "../../assets/gradiente.webp";


const Container = styled.div`
padding: 100px;
background-image: url(${Background}) ;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`;

const PageContainer = styled.div`
 // background-color: #ca2b2b;
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
  text-align: Left;
  max-width: 800px;
  margin-bottom: 1rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  color: #666;
  text-align: Left;
  max-width: 700px;
  margin-bottom: 2rem;
`;

const Date = styled.p`
  font-size: 0.8rem;
  color: #999;
  text-align: Left;
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
  text-align: Left;
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
  const newsId = "67b6638ef773aac7a3029adc";
  //const { id } = useParams(); // Pega o ID da URL
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/news/${newsId}`);
        setNews(response.data);
      } catch (error) {
        console.error("Erro ao buscar notícia:", error);
        setError("Erro ao carregar notícia.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [newsId]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!news) return <p>Notícia não encontrada.</p>;

  return (
    <Container>
    <PageContainer>
      <Title>{news.title}</Title>
      <SubTitle>{news.subTitle}</SubTitle> {/* Corrigido para subTitle (não SubTitle) */}
      <Date>Publicado em: {news.date}</Date>
      <Image1 src={news.imagemUrl} alt={news.title} /> {/* Certifique-se de que imagemUrl está correto */}
      <Image1Description>{news.legendaImagem}</Image1Description>
      <Text dangerouslySetInnerHTML={{ __html: news.news }} /> {/* Corrigido para news */}
    </PageContainer>
  </Container>
  );
};
/* 

  return (
   
    <Container>
        <PageContainer>
        <Title>Estados americanos se unem contra Musk por invasão de dados privados</Title>
        <SubTitle>DOGE, equipe de Elon Musk, obteve acesso a informações pessoais de milhões de americanos e preocupa governantes</SubTitle>
        <Date>Publicado em: 08/02/2025 07h47</Date>
        <Image1 src={img} alt="Elon Musk" />
        <Image1Description>Kathy Hutchins / Shutterstock</Image1Description>
        <Text>
            Uma coalizão de 13 procuradores-gerais de estados dos EUA, incluindo Califórnia, Connecticut, Maine, Maryland e Nova York, anunciou em um comunicado que está planejando entrar com uma ação judicial para bloquear a equipe de Elon Musk de acessar sistemas sensíveis de pagamento do governo federal, que contêm dados pessoais de cidadãos americanos.
        Uma coalizão de 13 procuradores-gerais de estados dos EUA, incluindo Califórnia, Connecticut, Maine, Maryland e Nova York, anunciou em um comunicado que está planejando entrar com uma ação judicial para bloquear a equipe de Elon Musk de acessar sistemas sensíveis de pagamento do governo federal, que contêm dados pessoais de cidadãos americanos.
        O movimento ocorre após a equipe de Musk, denominada “Departamento de Eficiência Governamental” (DOGE), ter obtido acesso a vários departamentos e bases de dados importantes do governo, como os do Tesouro dos EUA, Departamento de Educação e Departamento de Saúde e Serviços Humanos.
        Esses sistemas contêm informações pessoais de milhões de americanos, incluindo dados de beneficiários da Previdência Social, declarações de impostos e outros pagamentos governamentais, dados esses que, historicamente, eram acessados apenas por funcionários de carreira devido à sua sensibilidade.

        </Text>
        </PageContainer>
    </Container>
    
  );
};
*/
export default News;
