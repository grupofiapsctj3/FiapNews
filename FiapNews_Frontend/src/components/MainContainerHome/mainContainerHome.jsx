import React, { useEffect, useState }  from "react";
import styled from "styled-components";
import Carrossel from "../SwiperSlide/swiperSlide";
import arrowIcon from "../../assets/seta-cinza.png";
import NewsCards from "../Card/Card";
import VideoContainer from "../VideoContainer/VideoContainer";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    gap: 30px;
    width: 100%;
`;


const NewsContainer = styled.div`
     padding: 10px;
`;

const MainContainerNews = styled.div`
    width: 100%;
    display: flex;
    height: 45%;
    align-items: center;
`;


// Criando: Embarque nesse Carroceu, Onde o mundo faz de conta, A terra é quase o céu.

const Carrousel = styled.div`
    width: 750px;
    height: 650px;
    margin-top: 200px;
`;

//Construindo barra de Noticias em texto.

const TextNews = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
gap: 20px;
margin-top: 200px;
`;

const ImgIcon = styled.img`
    height: 0.8em;
    width: auto;
`;

const TextCard = styled.div`
width: 40%;
height: auto;
text-align: left;
gap: 10px;
margin: 5px;
padding: 10px;
transition: all 0.3s ease;  
    cursor: pointer;  
    &:hover {
    transform: scale(1.05); 
    }
`;


const NewsTitle = styled.h3`
  font-size: 1.5em;
  color: #c9dddd;;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  text-align: left;
`;

const NewsDescription = styled.p`
  font-size: 1em;
  color: #c9dddd;
  margin: 0.5rem;
  text-align: left;
`;


const MainContainerHome = () => {
  const [textNews, setTextNews] = useState([]);
  const navigate = useNavigate() 

  useEffect(() => {
    fetch("http://localhost:5000/api/news/news/1/4/4") 
      .then((res) => res.json())
      .then((data) => setTextNews(data))
      .catch((err) => console.error("Erro ao buscar notícias:", err));
  }, []);

  return (
    <Container>

      <VideoContainer />
        
      <NewsContainer>
        <MainContainerNews>
          <Carrousel>
            <Carrossel />
          </Carrousel>       
          <TextNews>
            {textNews.map((news, index) => (              
                <TextCard onClick={ () => navigate(`/news/${news._id}`)} key={index}>
                  <NewsTitle>{news.subTitle}</NewsTitle> {}
                  <NewsDescription>
                    <ImgIcon src={arrowIcon} />&nbsp;{news.title} {}
                  </NewsDescription>
                </TextCard>
            ))}
          </TextNews>
        </MainContainerNews>
        <NewsCards />
      </NewsContainer>
    </Container>
  );
};

export default MainContainerHome;



