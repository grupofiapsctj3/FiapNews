import React from "react";
import styled from "styled-components";

const NewsGrid = styled.div`
    display: flex;
    
    //grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 30px;
    padding: 20px;
    justify-content: center;
    flex-wrap: wrap; //quebra de linha do conteudo
`;

const NewsCard = styled.div`
    //background-color: #ccc;
    border-radius: 8px;
    width: 20rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1rem;
    border-color: #abb4b4;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 150px; 
  border-radius: 8px;
  overflow: hidden; /* Impede que a imagem ultrapasse o card */
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
const newsData = [
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
      {
        image: 'https://img.odcdn.com.br/wp-content/uploads/2025/01/Design-sem-nome-14-1-1920x1080.jpg',
        title: 'Notícia 4',
        description: 'Descrição breve da Notícia 4'
      }
  ];
  

const GridNewsBotton = () => {

    return(
        <NewsGrid>
        {newsData.map((news, index) => (
          <NewsCard key={index}>
            <ImageContainer>
                <NewsImage src={news.image} alt={news.title} />
                <NewsTitle>{news.title}</NewsTitle>
            </ImageContainer>
            <NewsDescription>{news.description}</NewsDescription>
          </NewsCard>
        ))}
      </NewsGrid>

    )
}

export default GridNewsBotton