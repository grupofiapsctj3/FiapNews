import React from "react";
import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8d7da;
  color: #721c24;
  padding: 2rem;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
`;

const Error = () => {
  const error = useRouteError(); // Captura o erro gerado

  return (
    <ErrorContainer>
      <ErrorTitle>Ops! Algo deu errado.</ErrorTitle>
      <ErrorMessage>
        {error.statusText || error.message || "Erro desconhecido."}
      </ErrorMessage>
    </ErrorContainer>
  );
};

export default Error;
