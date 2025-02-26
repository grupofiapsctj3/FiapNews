import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";


const Container = styled.div`
  //padding: 50px 20px;
  background: linear-gradient(90deg, rgba(8,10,11,1) 0%, rgba(24,28,31,1) 35%, rgba(38,42,45,1) 100%);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
  padding-top: 200px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const DateText = styled.p`
  font-size: 14px;
  color: #ccc;
  margin-bottom: 20px;
`;

const VideoWrapper = styled.div`
  width: 80%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Summary = styled.p`
  font-size: 18px;
  max-width: 800px;
`;

const Videos = () => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/videos/${id}`)
      .then((response) => response.json())
      .then((data) => setVideoData(data))
      .catch((error) => console.error("Erro ao carregar dados:", error));
  }, [id]);

  if (!videoData) {
    return <Container>Carregando...</Container>;
  }

  const formattedDate = new Date(videoData.date).toLocaleDateString("pt-BR");

  return (
    <Container>
      <Title>{videoData.title}</Title>
      <DateText>{formattedDate}</DateText>
      <VideoWrapper>
        <ReactPlayer url={videoData.urlVideo} width="100%" height="100%" controls />
      </VideoWrapper>
      <Summary>{videoData.summary}</Summary>
    </Container>
  );
};

export default Videos;
