import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HouseProvider } from "./HouseContext";
import { HouseContext } from "./HouseContext";

const CardContainer = styled.div`
  background-color: 323232;
`;

const Card = styled.div`
  position: relative;

  display: inline-block;
  margin: 5px;
  margin-top: 1rem;
  margin-bottom: 20px;
  padding: 24px;

  border-style: solid;
  border-radius: 2px;
  background: grey;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  border-radius: 2rem;
  background-color: #ff1e56;
`;

const HouseList = () => {
  const { houses } = useContext(HouseContext);

  return (
    <React.Fragment>
      <CardContainer>
        {houses.map(data => (
          <Link key={data.name} to={`/houses/${data._id}`}>
            <Card id={data.name}>
              <h1>{data.name}</h1>
            </Card>
          </Link>
        ))}
      </CardContainer>
    </React.Fragment>
  );
};

export default HouseList;
