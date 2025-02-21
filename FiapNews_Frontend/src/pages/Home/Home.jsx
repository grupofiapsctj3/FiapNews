import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Background from "../../assets/gradiente.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import ColumnistsContainer from "../../components/ColumnistSection/ColumnistSection";
import GridNewsBotton from "../../components/GridNewsBotton/GridNewsBotton";


const Container = styled.div`
padding: 100px;
background-image: url(${Background}) ;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`;

const PageContainer = styled.div`
 // background-color: #ca2b2b;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  `;
  
const MainContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-top: 20px;
`;

const CarouselSection = styled.div`
  background-color: #ddd;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoNewsSection = styled.div`
  background-color: #ccc;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Home = () =>{
  return (
    <Container>
      <ColumnistsContainer />
      
      <MainContent>
        <CarouselSection>
          <Swiper slidesPerView={1} pagination={{ clickable: true }}>
            <SwiperSlide>Notícia 1</SwiperSlide>
            <SwiperSlide>Notícia 2</SwiperSlide>
            <SwiperSlide>Notícia 3</SwiperSlide>
          </Swiper>
        </CarouselSection>
        <VideoNewsSection>Notícias em Vídeo</VideoNewsSection>
      </MainContent>
      <GridNewsBotton />
    </Container>
  );
};

export default Home;
