import React from "react";
import styled from "styled-components";
import ColumnistsContainer from "../../components/ColumnistSection/ColumnistSection";
import GridNewsBotton from "../../components/GridNewsBotton/GridNewsBotton";
import MainContainerHome from "../../components/MainContainerHome/mainContainerHome";



const Container = styled.div` 
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 150px;
  background: rgb(8,10,11);
  background: linear-gradient(90deg, rgba(8,10,11,1) 0%, rgba(24,28,31,1) 35%, rgba(38,42,45,1) 100%);
  width: 100vw;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  min-height: 100%;
  //overflow: hidden;
`;  
  
const WraperTop = styled.div`
grid-area: 2 / 1 / 3 / 2;
`;

const WraperBottom = styled.div`
grid-area: 1 / 1 / 2 / 2;
//position: absolute;
//margin-top: ${(props) => props.marginTop}px;

`;


const Home = () =>{ 

  return (
    <Container>
      <WraperTop>
        <ColumnistsContainer />
        <MainContainerHome />
      </WraperTop>
      <WraperBottom>
        <GridNewsBotton />
      </WraperBottom>
    </Container>
  );
};

export default Home; 

/*
<WraperBottom>
<GridNewsBotton />
</WraperBottom>
*/