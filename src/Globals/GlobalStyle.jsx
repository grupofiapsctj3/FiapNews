import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    //width: 100vw;
    //height: 100vh;
    overflow: auto;
  }
  /* Estilizando a barra de rolagem (Chrome, Safari, Edge) */
  ::-webkit-scrollbar {
    width: 6px; /* Define a largura da barra */
  }

  ::-webkit-scrollbar-track {
    background: #222; /* Cor do fundo da trilha */
  }

  ::-webkit-scrollbar-thumb {
    background: #b22222; /* Cor da barra (vermelho escuro) */
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ff4500; /* Cor ao passar o mouse */
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #b22222 #222;
  }
  :root {
    --scrollbar-width: 10px; /* Defina o valor conforme necessário */
  }

`;



export default GlobalStyle