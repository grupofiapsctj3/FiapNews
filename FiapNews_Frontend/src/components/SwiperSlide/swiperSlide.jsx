// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react'; // Importação do Swiper
// import { Autoplay, Pagination } from 'swiper/modules'
// import 'swiper/css'; // Importando o CSS base do Swiper
// import 'swiper/css/navigation'; // Importando o CSS para navegação
// import 'swiper/css/pagination'; // Importando o CSS para paginação
// import 'swiper/css/autoplay';
// import styled from 'styled-components';

// // Estilizando o container do carrossel
// const CarrosselContainer = styled.div`
//   max-width: 100%;
//   margin: 0 auto;
//   padding: 20px;
//   box-sizing: border-box;
//   position: relative;
// `;

// // Estilizando as imagens dentro do carrossel
// const Image = styled.img`
//   width: 100%;
//   height: auto;
//   object-fit: cover;
// `;

// const Carrossel = () => {

//   useEffect(() => {
//     fetch("http://localhost:5000/api/news/news/1/0/4") // Últimas 4 notícias type=1
//       .then((res) => res.json())
//       .then((data) => setCarouselNews(data))
//       .catch((err) => console.error("Erro ao buscar notícias:", err));
//   }, []);
  
//   return (
//     <CarrosselContainer>
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         spaceBetween={50}  // Espaçamento entre os slides
//         slidesPerView={1}  // Quantidade de slides visíveis por vez
//         loop  // Faz o carrossel dar loop
//         pagination={{ clickable: true }}  // Paginação clicável
//         autoplay={{
//             delay: 3000, // Tempo entre cada slide (em milissegundos)
//             disableOnInteraction: false, // Não desativa o autoplay ao interagir com os slides
//           }}
//       >
//         <SwiperSlide>
//           <Image src="https://cdn.filestackcontent.com/YUTXL9ipSgqb9SkUWi2Q" alt="Imagem 1" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src="https://cdn.filestackcontent.com/338BsZA3RtacGghb0YTQ" alt="Imagem 2" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src="https://cdn.filestackcontent.com/BNQmN0i6RaqOLTsnwGkh" alt="Imagem 3" />
//         </SwiperSlide>
//       </Swiper>
//     </CarrosselContainer>
//   );
// };

// export default Carrossel;


import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styled from "styled-components";

// Estilizando o container do carrossel
const CarrosselContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`;

// Estilizando as imagens dentro do carrossel
const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;

// Estilizando o título das notícias
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
              <div style={{ position: "relative" }}>
                <Image src={newsItem.news.match(/<img src="([^"]+)"/)?.[1]} alt={newsItem.title} />
                <Title>{newsItem.title}</Title>
              </div>
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
