import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    padding: 15px;
    margin-top: 100px;
`;

const VideoCards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 15px;
    transition: all 0.3s ease;  // Adiciona uma transição suave
    cursor: pointer;  // Indica que é interativo
    &:hover {
    transform: scale(1.05); 
}`;


const ImageVideo = styled.img`
    width: 100%;
    height: 150px;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease; 
    cursor: pointer;  // Indica que é interativo
    &:hover {
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.6); 
  }
`;

const VideoTitle = styled.h3`
    margin: 0;
    font-size: 1.2em;
    color: #c9dddd;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const getYoutubeThumbnail = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "";
};

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/videos/videos")
            .then(response => {
                setVideos(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar vídeos:", error);
            });
    }, []);

    return (
        <Container>
            {videos.map((video) => (
                <Link to={`/videos/${video._id}`} key={video._id} style={{ textDecoration: "none" }}>
                    <VideoCards>
                        <ImageVideo src={getYoutubeThumbnail(video.urlVideo)} alt={video.title} />
                        <VideoTitle>{video.title}</VideoTitle>
                    </VideoCards>
                </Link>
            ))}
        </Container>
    );
};

export default VideoContainer;
