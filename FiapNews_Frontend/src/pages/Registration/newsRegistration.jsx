import React, { useState, useRef } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import ImageUpload from "../../components/ImageUpload/imageUpload.jsx";
import ImageGallery from "../../components/ImageGallery/imageGallery.jsx";

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
  background: #EA1D5D;
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
    min-height: 200px;
    overflow-y: auto;
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

  const handleInsertImageMarker = (imageData) => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      const range = quill.getSelection();
      if (range) {
        const token = `{imagem:${imageData.id}|legenda:${imageData.legenda}|descricao:${imageData.descricao}}`;
        quill.insertText(range.index, token);
      }
    }
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
      if (quillRef.current) {
        quillRef.current.getEditor().setContents([]);
      }
    } catch (error) {
      console.error("Erro ao cadastrar notícia:", error);
      alert("Erro ao cadastrar notícia. Tente novamente.");
    }
  };

  return (
    <PageContainer>
      <LeftSection>
        <ImageGallery quillRef={quillRef} />
      </LeftSection>
      <CenterSection>
        <h2>Cadastrar Notícia</h2>
        <form onSubmit={handleSubmit}>
          <Label>Data</Label>
          <Input type="date" name="date" value={form.date} onChange={handleChange} required />
          <Label>Título</Label>
          <Input type="text" name="title" value={form.title} onChange={handleChange} required />
          <Label>Subtítulo</Label>
          <Input type="text" name="subTitle" value={form.subTitle} onChange={handleChange} required />
          <Label>Título Resumido</Label>
          <Input type="text" name="briefTitle" value={form.briefTitle} onChange={handleChange} required />
          <Label>Subtítulo Resumido</Label>
          <Input type="text" name="briefSubTitle" value={form.briefSubTitle} onChange={handleChange} required />
          <Label>Resumo</Label>
          <Input type="text" name="summary" value={form.summary} onChange={handleChange} required />
          <Label>Notícia Completa</Label>
          <StyledQuillContainer>
            <ReactQuill ref={quillRef} theme="snow" value={form.news} onChange={handleTextChange} modules={modules} />
          </StyledQuillContainer>
          <Button type="submit">Cadastrar</Button>
        </form>
      </CenterSection>
      <RightSection>
        <ImageUpload onImageInsert={handleInsertImageMarker} />
      </RightSection>
    </PageContainer>
  );
};

export default NewsFormRegistration;

