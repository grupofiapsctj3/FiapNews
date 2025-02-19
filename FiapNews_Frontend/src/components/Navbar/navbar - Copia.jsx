import React from "react";
import styled from "styled-components";
import Background from "../../assets/gradiente.webp";
import FiapNewsPlus from "../../assets/Fiap-News-Plus.png";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: calc(100% - var(--scrollbar-width, 0px));
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => (props.scrollTop > 50 ? "#282c34" : "transparent")};
  background-image: ${(props) => (props.scrollTop <= 50 ? `url(${Background})` : "none")};
  transition: background-color 0.4s ease-in-out;
  backdrop-filter: ${(props) => (props.scrollTop > 50 ? "blur(5px)" : "none")};
  z-index: 1000;
 `;

const NavLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  img {
    width: 150px;
    height: auto;
  }
`;

const Navbar = ({ scrollTop }) => {
  return (
    <NavbarContainer scrollTop={scrollTop}>
      <NavLogo>
        <img src={FiapNewsPlus} alt="Fiap News Plus" />
      </NavLogo>
    </NavbarContainer>
  );
};

export default Navbar;
