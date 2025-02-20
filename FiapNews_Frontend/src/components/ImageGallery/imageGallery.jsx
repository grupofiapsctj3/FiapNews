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
    const imageTag = `
        <figure>
          <img src="${url}" alt="Imagem" />
          <figcaption><strong>${caption}</strong><br>${description}</figcaption>
        </figure>
        `;  // Marca a imagem no formato HTML
    editor.clipboard.dangerouslyPasteHTML(range.index, imageTag);
  };

  // Função para arrastar a imagem para o React-Quill
  const handleDragStart = (event, url) => {
    event.dataTransfer.setData("text/plain", url);
  };
  
  const handleDrop = (event) => {
    event.preventDefault();
    const url = event.dataTransfer.getData("text/plain");
    const editor = quillRef.current?.getEditor();
  
    if (editor) {
      const range = editor.getSelection() || { index: editor.getLength() };
      const imageTag = ` 
        <figure>
          <img src="${url}" alt="Imagem" />
          <figcaption><strong>${caption}</strong><br>${description}</figcaption>
        </figure>
        `;
      editor.clipboard.dangerouslyPasteHTML(range.index, imageTag);
    }
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

