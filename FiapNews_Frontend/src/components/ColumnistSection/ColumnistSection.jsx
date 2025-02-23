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
  color: #c9dddd;
`;

const columnists = [
    { name: "Ariadne", img: "https://cdn.filestackcontent.com/Augwb710QECDh5WCwSgc" },
    { name: "Gabriel Moratelli", img: "https://cdn.filestackcontent.com/rj46Aa26S8SXNfjEvNZu" },
    { name: "Ariadne", img: "https://cdn.filestackcontent.com/Augwb710QECDh5WCwSgc" },
    { name: "Gustavo Parra Benitez", img: "https://cdn.filestackcontent.com/j43NwMY2Ripxy2VaCGM0" },
    { name: "Gustavo Parra Benitez", img: "https://cdn.filestackcontent.com/j43NwMY2Ripxy2VaCGM0" },
    { name: "Gustavo Parra Benitez", img: "https://cdn.filestackcontent.com/j43NwMY2Ripxy2VaCGM0" },
    { name: "Gustavo Parra Benitez", img: "https://cdn.filestackcontent.com/j43NwMY2Ripxy2VaCGM0" },
    { name: "Gustavo Parra Benitez", img: "https://cdn.filestackcontent.com/j43NwMY2Ripxy2VaCGM0" },
    { name: "Gabriel Moratelli", img: "https://cdn.filestackcontent.com/rj46Aa26S8SXNfjEvNZu" }
  ];

const ColumnistsContainer = () =>{

    return (
        <ColumnistsSection>
            {columnists.map((col, index) => (
                <ColumnistCard key={index}>
                   <ColumnistImage src={col.img} alt={col.name} />
                   <ColumnistName>{col.name}</ColumnistName>
                 </ColumnistCard>
            ))}
        </ColumnistsSection>
     
)};

export default ColumnistsContainer