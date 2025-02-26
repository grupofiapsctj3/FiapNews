import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CarrosselContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
    transform: scale(1.02); 
    }
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;

const Title = styled.h2`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  max-width: 80%;
`;

const Carrossel = () => {
  const [carouselNews, setCarouselNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/news/news/1/0/4") // Últimas 4 notícias type=1
      .then((res) => res.json())
      .then((data) => setCarouselNews(data))
      .catch((err) => console.error("Erro ao buscar notícias:", err));
  }, []);

  return (
    <CarrosselContainer>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50} 
        slidesPerView={1} 
        loop
        pagination={{ clickable: true }} 
        autoplay={{ delay: 5000, disableOnInteraction: false }} 
      >
        {carouselNews.length > 0 ? (
          carouselNews.map((newsItem) => (
            
            <SwiperSlide key={newsItem._id}>
              <Link to={`/news/${newsItem._id}`} key={newsItem._id} style={{ textDecoration: "none" }}>
                <div style={{ position: "relative" }}>
                  <Image src={newsItem.news.match(/<img src="([^"]+)"/)?.[1]} alt={newsItem.title} />
                  <Title>{newsItem.title}</Title>
                </div>
                </Link>
            </SwiperSlide>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </Swiper>
    </CarrosselContainer>
  );
};

export default Carrossel;
