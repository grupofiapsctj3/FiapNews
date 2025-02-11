import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: auto; 
`;

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  // Função para capturar o scroll
  const handleScroll = () => {
    setScrollTop(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const getScrollbarWidth = () => {
      return window.innerWidth - document.documentElement.clientWidth;
    };

    document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${getScrollbarWidth()}px`
    );

    window.addEventListener("resize", () => {
      document.documentElement.style.setProperty(
        "--scrollbar-width",
        `${getScrollbarWidth()}px`
      );
    });

    return () => {
      window.removeEventListener("resize", getScrollbarWidth);
    };
  }, []);

  return (
    <Wrapper >
      <Navbar />
      <Outlet />
      <Footer />
    </Wrapper>
  );
}

export default App;
