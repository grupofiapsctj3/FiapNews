import React from "react";
import styled from "styled-components";
import ColumnistsContainer from "../../components/ColumnistSection/ColumnistSection";
import MainContainerHome from "../../components/MainContainerHome/mainContainerHome";


const Container = styled.div` 
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 0.8fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 150px 150px 0 150px;
  background: rgb(8,10,11);
  background: linear-gradient(90deg, rgba(8,10,11,1) 0%, rgba(24,28,31,1) 35%, rgba(38,42,45,1) 100%);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;  
  

const Home = () =>{ 

  return (
    <Container>
      <ColumnistsContainer />
      <MainContainerHome />
    </Container>
  );
};

export default Home; 