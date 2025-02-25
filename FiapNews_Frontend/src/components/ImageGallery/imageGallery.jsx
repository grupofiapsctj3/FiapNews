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

const RefreshButton = styled.button`
  margin: 10px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ImageGallery = ({ quillRef }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/images/all");
      setImages(response.data);
    } catch (error) {
      console.error("Erro ao buscar imagens:", error);
    }
  };

  const handleImageClick = (url) => {
    const editor = quillRef.current.getEditor();
    const range = editor.getSelection();
    const imageTag = `
      <figure>
        <img src="${url}" alt="Imagem" />
      </figure>
    `;
    editor.clipboard.dangerouslyPasteHTML(range.index, imageTag);
  };

  return (
    <GalleryContainer>
      <h3>Galeria de Imagens</h3>
      <RefreshButton onClick={fetchImages}>Atualizar Imagens</RefreshButton>
      {images.map((image, index) => (
        <ImagePreview
          key={index}
          src={image.imageUrl}
          onDoubleClick={() => handleImageClick(image.imageUrl)}
          draggable
        />
      ))}
    </GalleryContainer>
  );
};

export default ImageGallery;
