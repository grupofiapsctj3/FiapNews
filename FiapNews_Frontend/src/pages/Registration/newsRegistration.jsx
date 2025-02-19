import React, { useState, useRef } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import ImageUpload from "../../components/ImageUpload/imageUpload.jsx";
import Background from "../../assets/gradiente.webp";
import ImageGallery from "../../components/ImageGallery/imageGallery.jsx";



const PageContainer = styled.div`
  /*display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1400px;
  margin: 150px auto;
  padding: 20px;*/
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  margin: 150px auto;
  align-items: flex-start;
  justify-content: space-between;
  //background-image: url(${Background}) ;
`;

const LeftSection = styled.div`
  width: 20%;
  background: #f1f1f1;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CenterSection = styled.div`
  flex: 1;
  max-width: 800px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const RightSection = styled.div`
  width: 25%;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin: 10px 0 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #0056b3;
  }
`;

const StyledQuillContainer = styled.div`
  .ql-editor {
    min-height: 200px; /* Altura mínima fixa */
    overflow-y: auto;  /* Para permitir rolagem dentro do editor */
  }
`;


const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote", "code-block"],
    ["link"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    ["clean"],
  ],
};

const NewsFormRegistration = () => {
  const [form, setForm] = useState({
    type: "1",
    date: "",
    title: "",
    briefTitle: "",
    subTitle: "",
    briefSubTitle: "",
    summary: "",
    news: "",
  });

  const [images, setImages] = useState([]);
  const quillRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTextChange = (content) => {
    setForm({ ...form, news: content });
  };

  const handleInsertImageMarker = (imageUrl) => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      const range = quill.getSelection();
      if (range) {
        quill.insertText(range.index, `{imagem${images.length + 1}}`);
      }
    }
    setImages((prev) => [...prev, imageUrl]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let finalText = form.news;
    images.forEach((url, index) => {
      finalText = finalText.replace(`{imagem${index + 1}}`, `<img src="${url}" alt="Imagem ${index + 1}" />`);
    });

    try {
      await axios.post("http://localhost:5000/api/news/add", {
        ...form,
        news: finalText,
      });

      alert("Notícia cadastrada com sucesso!");

      setForm({
        type: "1",
        date: "",
        title: "",
        briefTitle: "",
        subTitle: "",
        briefSubTitle: "",
        summary: "",
        news: "",
      });

      setImages([]);
    } catch (error) {
      console.error("Erro ao cadastrar notícia:", error);
      alert("Erro ao cadastrar notícia. Tente novamente.");
    }
  };

  return (
    <PageContainer>
      {/* Sessão Esquerda - Pode ser usada para Categorias, Menus, etc. */}
      <LeftSection>
        <ImageGallery quillRef={quillRef}  />
      </LeftSection>

      {/* Sessão Central - Formulário de Notícias */}
      <CenterSection>
        <h2>Cadastrar Notícia</h2>
        <form onSubmit={handleSubmit}>
          <Label>Data</Label>
          <Input type="date" name="date" value={form.date} onChange={handleChange} required />

          <Label>Título</Label>
          <Input type="text" name="title" value={form.title} onChange={handleChange} required />

          <Label>Subtítulo</Label>
          <Input type="text" name="title" value={form.title} onChange={handleChange} required />

          <Label>Resumo</Label>
          <Input type="text" name="summary" value={form.summary} onChange={handleChange} required />

          <Label>Notícia Completa</Label>
          <StyledQuillContainer>
            <ReactQuill ref={quillRef} theme="snow" value={form.news} onChange={handleTextChange} modules={modules} />
          </StyledQuillContainer>

          <Button type="submit">Cadastrar</Button>
        </form>
      </CenterSection>

      {/* Sessão Direita - Upload de Imagens */}
      <RightSection>
        <ImageUpload onImageInsert={handleInsertImageMarker} />
      </RightSection>
    </PageContainer>
  );
};

export default NewsFormRegistration;
