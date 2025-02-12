import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import Background from "../../assets/gradiente.webp";

const Container = styled.div`
  padding: 100px;
  background-image: url(${Background});
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
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #c9dddd;
  max-width: 800px;
  margin-bottom: 1rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  color: #666;
  max-width: 700px;
  margin-bottom: 2rem;
`;

const Date = styled.p`
  font-size: 0.8rem;
  color: #999;
  margin-bottom: 1rem;
`;

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 10px;
  overflow: hidden;
`;

const Video = () => {
  return (
    <Container>
      <PageContainer>
        <Title>Estados americanos se unem contra Musk por invasão de dados privados</Title>
        <SubTitle>DOGE, equipe de Elon Musk, obteve acesso a informações pessoais de milhões de americanos e preocupa governantes</SubTitle>
        <Date>Publicado em: 08/02/2025 07h47</Date>

        <VideoWrapper>
          <ReactPlayer
            url="https://youtu.be/RYUr-5PYA7s"
            width="100%"
            height="100%"
            controls
          />
        </VideoWrapper>
      </PageContainer>
    </Container>
  );
};

export default Video;
