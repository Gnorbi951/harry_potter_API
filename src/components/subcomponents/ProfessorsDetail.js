import React from "react";
import styled from "styled-components";
import ProfilePic from "/home/evelin/Codecool/Advanced/potter/src/wizard.png";

const CardBody = styled.div`
  /* margin: 1rem auto; */
  background-color: #ccc;
  padding: 1rem;
  width: inherit;
`;
const Card = styled.div`
  color: #404040;
  /* padding: 1rem; */
  display: flex;
  flex-direction: column;
  align-content: center;
  border: 1px solid #ccc;
`;

const Profile = styled.img`
  margin: 0 auto;
  min-width: 12rem;
  max-width: 15rem;
`;

const Cards = styled.div`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 1.3rem;
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const ProfessorsDetail = props => {
  return (
    <Cards>
      {props.data.map(profData => (
        <Card>
          <Profile src={ProfilePic} alt="Wizard profile"></Profile>
          <CardBody>
            <p>{profData.name}</p>
            <p>
              {profData.dumbledoresArmy
                ? "In dumbledore's army: yes"
                : "In dumbledore's army: no"}
            </p>
            <p>Blood status: {profData.bloodStatus}</p>
            <p>Species: {profData.species}</p>
          </CardBody>
        </Card>
      ))}
    </Cards>
  );
};
export default ProfessorsDetail;
