import React, { useEffect, useState }  from "react";
import styled from "styled-components";
import Carrossel from "../SwiperSlide/swiperSlide";
import arrowIcon from "../../assets/seta-cinza.png";
import NewsCards from "../Card/Card";


const Container = styled.div`
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    //height: 80vh;
    gap: 30px;
    width: 100%;
`;

const VideoContainer = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    padding: 15px;
    margin-top: 100px;
   // background-color: orange;
`;

const NewsContainer = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    padding: 10px;
    //background-color: blue;
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
    //background: #f3f;
`;

//Construindo barra de Noticias em texto.

const TextNews = styled.div`
width: 50%;
height: 100%;
//background: #53f;
display: flex;
flex-direction: column;
flex-wrap: wrap;
gap: 20px;
//margin:50px;
//margin-top:100px;
//align-items: center;
//padding-left: 25px;
padding-top: 100px;
`;

const ImgIcon = styled.img`
    height: 0.8em;
    width: auto;
`;

const TextCard = styled.div`
width: 40%;
height: auto;
text-align: left;
//background: #53f;
//display: flex;
//flex-direction: column;
gap: 10px;
margin: 5px;
padding: 10px;
`;


const NewsTitle = styled.h3`
  //position: absolute;
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

const BottomCard = styled.div`
  height: 50%;
    width: 100%;
    background-color: brown;
`;
// Contrução do conteudo da grind Video

const VideoCards = styled.div`
    //width: 50%;
    //height: 100%;
    // background: #53f;
    //display: flex;
    //flex-direction: column;
    gap: 25px;
`;
const ImageVideo = styled.img`
  //position: relative;
  width: 100%;
  height: 150px; 
  border-radius: 8px;
  overflow: hidden; 
`;

const VideoTitle = styled.h3`
//position: absolute;
bottom: 10px; 
left: 10px;
right: 10px;
margin: 0;
font-size: 1.2em;
color: #c9dddd;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const videoData = [
    {
      image: 'https://cdn.filestackcontent.com/BNQmN0i6RaqOLTsnwGkh',
      title: 'Notícia 1',
      description: 'Descrição breve da Notícia 1'
    },
    {
      image: 'https://cdn.filestackcontent.com/338BsZA3RtacGghb0YTQ',
      title: 'Black Friday: supera mais de 74 bilhões',
      description: 'Valor arrecadado durante a Black Friday supera as vendas do Ano Novo'
    },
    {
      image: 'https://cdn.filestackcontent.com/YUTXL9ipSgqb9SkUWi2Q',
      title: 'Notícia 3',
      description: 'Descrição breve da Notícia 3'
    },
    {
      image: 'https://img.odcdn.com.br/wp-content/uploads/2025/01/Design-sem-nome-14-1-1920x1080.jpg',
      title: 'Notícia 4',
      description: 'Descrição breve da Notícia 4'
    },
    {
        image: 'https://cdn.filestackcontent.com/BNQmN0i6RaqOLTsnwGkh',
        title: 'Notícia 1',
        description: 'Descrição breve da Notícia 1'
      },
      {
        image: 'https://cdn.filestackcontent.com/338BsZA3RtacGghb0YTQ',
        title: 'Black Friday: supera mais de 74 bilhões',
        description: 'Valor arrecadado durante a Black Friday supera as vendas do Ano Novo'
      },
      {
        image: 'https://cdn.filestackcontent.com/YUTXL9ipSgqb9SkUWi2Q',
        title: 'Notícia 3',
        description: 'Descrição breve da Notícia 3'
      },
];



const MainContainerHome = () => {
  const [textNews, setTextNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/news/news/1/4/4") // Da 5ª à 11ª notícia type=1
      .then((res) => res.json())
      .then((data) => setTextNews(data))
      .catch((err) => console.error("Erro ao buscar notícias:", err));
  }, []);

  return (
    <Container>
      <VideoContainer>
        {videoData.map((video, index) => (
          <VideoCards key={index}>
            <ImageVideo src={video.image} alt={video.title} />
            <VideoTitle>{video.title}</VideoTitle>
          </VideoCards>
        ))}
      </VideoContainer>
      <NewsContainer>
        <MainContainerNews>
          <Carrousel>
            <Carrossel />
          </Carrousel>       
          <TextNews>
            {textNews.map((news, index) => (
              <TextCard key={index}>
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



