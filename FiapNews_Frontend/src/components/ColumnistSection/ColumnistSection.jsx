import React from "react";
import styled from "styled-components";

const ColumnistsSection = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 0.015rem solid #ccc;
  border-bottom: 0.015rem solid #ccc;
  justify-content: center;
`;

const ColumnistCard = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  //background-color: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const ColumnistImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const ColumnistName = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  color: #c9dddd;
  max-width: 150px; 
  white-space: normal; 
  word-wrap: break-word; 
`;

const ColumnistLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  color: inherit;
`;

const columnists = [
    { name: "Ariadne Lista", img: "https://cdn.filestackcontent.com/Augwb710QECDh5WCwSgc", linkedin: "https://www.linkedin.com/in/ariadne-lista/" },
    { name: "Darlei Rosa Santos", img: "https://cdn.filestackcontent.com/tZKq9zsNSyCJY99BSgcC",linkedin:"https://www.linkedin.com/in/darleirosasantos?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Gabriel Pereira Moratelli", img: "https://cdn.filestackcontent.com/rj46Aa26S8SXNfjEvNZu",linkedin:"https://www.linkedin.com/in/gabrielmoratelli/" },
    { name: "Gustavo Parra Benitez", img: "https://cdn.filestackcontent.com/j43NwMY2Ripxy2VaCGM0",linkedin:"https://www.linkedin.com/in/gustavo-p-78a52b19b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Karla Eduarda Francisconi Santos", img: "https://cdn.filestackcontent.com/3Eojf8dcRFOuQVwmJH5t",linkedin:"https://www.linkedin.com/in/karlafrancisconi/" }
    
  ];

const ColumnistsContainer = () =>{

    return (
        <ColumnistsSection>
            {columnists.map((col, index) => (
                <ColumnistCard key={index}>
                  <ColumnistLink href={col.linkedin} target="_blank" rel="noopener noreferrer">
                    <ColumnistImage src={col.img} alt={col.name} />
                    <ColumnistName>{col.name}</ColumnistName>
                  </ColumnistLink>
                 </ColumnistCard>
            ))}
        </ColumnistsSection>
     
)};

export default ColumnistsContainer