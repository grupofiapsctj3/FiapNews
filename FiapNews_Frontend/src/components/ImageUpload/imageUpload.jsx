import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Sidebar = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-left: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  height: 100vh;
  overflow-y: auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

const Button = styled.button`
  background: #EA1D5D;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;

  &:hover {
    background: #0056b3;
  }
`;

const Elemento = styled.h3`
  margin-bottom: 0.5rem;
`;

const ImageUpload = ({ onImageInsert }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const fileInputRef = React.useRef(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUploadImage = async () => {
    if (!selectedFile) {
      alert("Por favor, selecione uma imagem!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post("http://localhost:5000/api/images/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.imageUrl) {
        const imageUrl = response.data.imageUrl;

        await axios.post("http://localhost:5000/api/images/save", {
          imageUrl,
          caption,
          description,
        });

        onImageInsert(imageUrl);

        setSelectedFile(null);
        setCaption("");
        setDescription("");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        alert("Imagem enviada com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao enviar a imagem:", error);
      alert("Erro ao fazer upload da imagem!");
    }
  };

  return (
    <Sidebar>
      <Elemento>Upload de Imagem</Elemento>
      <Input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} />
      <Input
        type="text"
        placeholder="Legenda"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <TextArea
        placeholder="Descrição da Foto"
        rows="3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="button" onClick={handleUploadImage}>
        Enviar Imagem
      </Button>
    </Sidebar>
  );
};

export default ImageUpload;
