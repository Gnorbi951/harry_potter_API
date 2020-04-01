import React from "react";
import styled from "styled-components";

const CardBody = styled.div`
  /* margin: 1rem auto; */
  /* background-color: #ccc; */
  padding: 1rem;
  width: inherit;
`;

const Name = styled.p`
  text-align: center;
  font-weight: bold;
  background-color: #6d8b90;
  color: white;
  padding: 1rem;
`;
const Card = styled.div`
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #181f48;
`;

const Profile = styled.img`
  margin: 0 auto;
  min-width: 300px;
  max-height: 400px;
  display: block;
`;

const Cards = styled.div`
  display: block;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 1.3rem;
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background-color: #040023;
`;

const Status = styled.span`
  font-weight: bold;
  color: #feac76;
`;

const ProfContainer = styled.div`
  display: block;
  background-size: cover;
  min-height: 100vh;
  background-color: #040023;
`;

const ProfessorsDetail = props => {
  return (
    <ProfContainer>
      <Cards>
        {props.data.map(profData => (
          <Card>
            <Profile
              src={require(`${profData.image}`)}
              alt="Wizard profile"
            ></Profile>
            <CardBody>
              <Name>{profData.name}</Name>
              <p>
                <Status>In Dumbledore's army: </Status>
                {profData.dumbledoresArmy ? "Yes" : "No"}
              </p>
              <p>
                <Status>Blood status:</Status> {profData.bloodStatus}
              </p>
              <p>
                <Status>Species: </Status>
                {profData.species}
              </p>
              <p>
                <Status>Course: </Status>
                {profData.course}
              </p>
            </CardBody>
          </Card>
        ))}
      </Cards>
    </ProfContainer>
  );
};
export default ProfessorsDetail;
