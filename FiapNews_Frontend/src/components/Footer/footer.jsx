import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #282c34;
  color: white;
  width: 100vw;
  box-sizing: border-box;
  margin-top: auto;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #61dafb;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 SCTJ3 Fase 3 Frontend Grupo 16. Todos os direitos reservados.</FooterText>
      <SocialLinks>
        <a href="https://postech.fiap.com.br/curso/dev-foundations/">Curso FIAP</a>
        <a href="https://github.com/grupofiapsctj3/CRUD">GIT CRUD</a>
        <a href="https://github.com/grupofiapsctj3/LIVRARIA">GIT Livraria</a>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;