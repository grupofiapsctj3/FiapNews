import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import FiapNewsPlus from "../../assets/Fiap-News-Plus.png";

const FIXED_NAVBAR_HEIGHT = "1.5rem"

const NavbarContainer = styled.nav`
  position: relative;
  width: 100%;
`;

const NavbarFixed = styled.div`
  position: fixed;
  justify-content: space-between;
  width: 100%;
  top: 0;
  right: 0;
  background: linear-gradient(to right, #272d30, #1d2123);
  color: white;
  padding: 0.2rem;
  z-index: 1100; 
  height: ${FIXED_NAVBAR_HEIGHT};
`;

const NavbarDinamic = styled.div.attrs((props) => ({
  style: {
    padding: props.scrollY > 100 ? "1.5rem 2rem" : "2rem 2rem",
    backgroundColor: `rgba(21, 24, 25, ${Math.min(props.scrollY / 100, 1)})`,
    backdropFilter: props.scrollY > 100 ? "blur(5px)" : "none",
  },
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: padding 0.6s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.5s ease-in-out;
  z-index: 1000;
  top: ${FIXED_NAVBAR_HEIGHT};
`;

const Button = styled.button`
  background-color: #EA1D5D; 
  color: #151819; 
  padding: 10px 20px; 
  border: none; 
  border-radius: 5px; 
  cursor: pointer; 
  font-size: 16px; 

  &:hover {
    box-shadow: 0 0 25px #EA1D5D; /* Sombra azul suave ao passar por cima */
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 3rem;
  font-family: Helvetica ;
  font-size: 1.2rem;
  
  li {
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #61dafb;
    }
  }
  `;

const StyledLink = styled(Link) `
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #61dafb;
}
`;

const NavLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  img {
    width: 170px;
    height: auto;
  }
`;

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarContainer>
      <NavbarFixed></NavbarFixed>
      <NavbarDinamic scrollY={scrollY}>
        <NavLogo>
          <img src={FiapNewsPlus} alt="Logo" />
        </NavLogo>
        <NavLinks>
        <li>
          <StyledLink to= '/'>Home</StyledLink>
        </li>
        <li>
          <StyledLink to= "/Newsreg">News</StyledLink>
        </li>
        <li>
          <StyledLink to= "/Videosreg">Videos</StyledLink>
        </li>
        <li>
          <StyledLink to= "/">Suporte</StyledLink>
        </li>
        
      </NavLinks>
        <Button>Assine Agora!</Button>
      </NavbarDinamic>
    </NavbarContainer>
  );
};

export default Navbar;
