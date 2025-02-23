import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Importação do Swiper
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'; // Importando o CSS base do Swiper
import 'swiper/css/navigation'; // Importando o CSS para navegação
import 'swiper/css/pagination'; // Importando o CSS para paginação
import 'swiper/css/autoplay';
import styled from 'styled-components';

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
  height: auto;
  object-fit: cover;
`;

const Carrossel = () => {
  return (
    <CarrosselContainer>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}  // Espaçamento entre os slides
        slidesPerView={1}  // Quantidade de slides visíveis por vez
        loop  // Faz o carrossel dar loop
        pagination={{ clickable: true }}  // Paginação clicável
        autoplay={{
            delay: 3000, // Tempo entre cada slide (em milissegundos)
            disableOnInteraction: false, // Não desativa o autoplay ao interagir com os slides
          }}
      >
        <SwiperSlide>
          <Image src="https://cdn.filestackcontent.com/YUTXL9ipSgqb9SkUWi2Q" alt="Imagem 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://cdn.filestackcontent.com/338BsZA3RtacGghb0YTQ" alt="Imagem 2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://cdn.filestackcontent.com/BNQmN0i6RaqOLTsnwGkh" alt="Imagem 3" />
        </SwiperSlide>
      </Swiper>
    </CarrosselContainer>
  );
};

export default Carrossel;
