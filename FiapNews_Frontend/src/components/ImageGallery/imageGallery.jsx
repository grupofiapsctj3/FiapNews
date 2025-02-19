/*import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 20px;
  background: #f9f9f9;
  border-right: 1px solid #ddd;
`;

const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 150px;
  height: auto;
  border-radius: 5px;
`;

const Caption = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
  color: #333;
`;

const Description = styled.p`
  font-size: 12px;
  color: #777;
`;

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/images/all") // 🔥 Faz a requisição GET para o backend
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar imagens:", error);
      });
  }, []);

  return (
    <GalleryContainer>
      <h3>Galeria de Imagens</h3>
      {images.length === 0 ? (
        <p>Nenhuma imagem encontrada.</p>
      ) : (
        images.map((image) => (
          <ImageItem key={image._id}>
            <Image src={image.imageUrl} alt={image.caption} />
            <Caption>{image.caption}</Caption>
            <Description>{image.description}</Description>
          </ImageItem>
        ))
      )}
    </GalleryContainer>
  );
};

export default ImageGallery; */


import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const ImagePreview = styled.img`
  width: 100%;
  max-width: 150px;
  margin-bottom: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 5px;

  &:hover {
    border-color: #007bff;
  }
`;

const ImageGallery = ({ quillRef }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/images/all");
        setImages(response.data);
      } catch (error) {
        console.error("Erro ao buscar imagens:", error);
      }
    };
    fetchImages();
  }, []);

  // Função que insere a imagem no React-Quill
  const handleImageClick = (url) => {
    const editor = quillRef.current.getEditor();
    const range = editor.getSelection();
    const imageTag = `<img src="${url}" alt="Imagem" />`;  // Marca a imagem no formato HTML
    editor.clipboard.dangerouslyPasteHTML(range.index, imageTag);
  };

  // Função para arrastar a imagem para o React-Quill
  const handleDragImage = (event, url) => {
    event.preventDefault();
    const editor = quillRef.current.getEditor();
    const range = editor.getSelection();
    const imageTag = `<img src="${url}" alt="Imagem" />`;  // Marca a imagem no formato HTML
    editor.clipboard.dangerouslyPasteHTML(range.index, imageTag);
  };

  return (
    <GalleryContainer>
      <h3>Galeria de Imagens</h3>
      {images.map((image, index) => (
        <ImagePreview
          key={index}
          src={image.imageUrl}
          onDoubleClick={() => handleImageClick(image.imageUrl)}  // Clique duplo para inserir
          onDragStart={(e) => handleDragImage(e, image.imageUrl)}  // Arrastar para inserir
          draggable
        />
      ))}
    </GalleryContainer>
  );
};

export default ImageGallery;
