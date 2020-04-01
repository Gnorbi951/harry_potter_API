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
  background-color: #cf5700;
  color: white;
  padding: 1rem;
`;
const Card = styled.div`
  color: #404040;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  border: 1px solid #ccc;
`;

const Profile = styled.img`
  margin: 0 auto;
  min-width: 200px;
  max-height: 300px;
`;

const Cards = styled.div`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 1.3rem;
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Status = styled.span`
  font-weight: bold;
`;

const ProfessorsDetail = props => {
  return (
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
  );
};
export default ProfessorsDetail;
