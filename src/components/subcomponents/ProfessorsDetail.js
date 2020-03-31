import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: dodgerblue;
  color: white;
  padding: 1rem;
  height: 4rem;
`;

const Cards = styled.div`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 1.3rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
const ProfessorsDetail = props => {
  return (
    <Cards>
      {props.data.map(profData => (
        <Card>{profData.name}</Card>
      ))}
    </Cards>
  );
};
export default ProfessorsDetail;
