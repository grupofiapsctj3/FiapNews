import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  padding-top: 150px;
  align-items: flex-start;
  justify-content: space-between;
  background: linear-gradient(90deg, rgba(8,10,11,1) 0%, rgba(24,28,31,1) 35%, rgba(38,42,45,1) 100%);
`;

const LeftSection = styled.div`
  width: 20%;
`;

const CenterSection = styled.div`
  flex: 1;
  max-width: 800px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  min-height: 100vh;
`;

const RightSection = styled.div`
  width: 25%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #EA1D5D; 
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #0056b3;
  }
`;

const VideoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const VideoCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  overflow: hidden;
`;

const VideoFrame = styled.img`
  width: 80%;
  height: auto;
  border: none;
  border-radius: 10px;
  overflow: hidden;
`;

const VideoTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const Summary = styled.p`
  font-size: 14px;
  color: #555;
`;

const DateText = styled.p`
  font-size: 12px;
  color: #999;
`;

const getYoutubeThumbnail = (url) => {
  const videoId = url.split("v=")[1]?.split("&")[0];
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "";
};


const VideoNewsPage = () => {
  const [videos, setVideos] = useState([]);
  const [form, setForm] = useState({
    type: "1",
    date: "",
    title: "",
    summary: "",
    urlVideo: "",
  });

  // Buscar vídeos ao carregar a página
  useEffect(() => {
    axios.get("http://localhost:5000/api/videos/videos")
      .then(response => setVideos(response.data))
      .catch(error => console.error("Erro ao buscar vídeos:", error));
  }, []);

  // Atualizar o formulário ao digitar
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/videos/add", form);
      alert("Vídeo cadastrado com sucesso!");
      
      // Atualizar lista de vídeos
      setVideos([...videos, form]);
      
      // Limpar formulário
      setForm({ type: "1", date: "", title: "", summary: "", urlVideo: "" });
    } catch (error) {
        console.error("Erro ao cadastrar vídeo:", error);
    
        // Verifica se há uma resposta do backend
        if (error.response) {
          alert(`Erro do servidor: ${error.response.data.message || JSON.stringify(error.response.data)}`);
        } else if (error.request) {
          alert("Erro: Sem resposta do servidor. Verifique sua conexão.");
        } else {
          alert(`Erro desconhecido: ${error.message}`);
        }
      }

  };

  return (
    <PageContainer>
      <LeftSection />
      <CenterSection>
        <Title>Cadastrar Novo Vídeo</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Data</Label>
          <Input type="date" name="date" value={form.date} onChange={handleChange} required />
          
          <Label>Título</Label>
          <Input type="text" name="title" value={form.title} onChange={handleChange} required />
          
          <Label>Resumo</Label>
          <Input type="text" name="summary" value={form.summary} onChange={handleChange} required />
          
          <Label>URL do Vídeo (YouTube Embed)</Label>
          <Input type="text" name="urlVideo" value={form.urlVideo} onChange={handleChange} required />
          
          <Button type="submit">Cadastrar</Button>
        </Form>

        <Title>Últimas Notícias em Vídeo</Title>
        <VideoList>
          {videos.map(video => (
            <VideoCard key={video._id}>
              <VideoTitle>{video.title}</VideoTitle>
              <DateText>{new Date(video.date).toLocaleDateString("pt-BR")}</DateText>
              <VideoFrame 
                src={getYoutubeThumbnail(video.urlVideo)} alt={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
              <Summary>{video.summary}</Summary>
            </VideoCard>
          ))}
        </VideoList>
      </CenterSection>
      <RightSection />
    </PageContainer>
  );
};

export default VideoNewsPage;
