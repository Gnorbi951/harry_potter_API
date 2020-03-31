import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import NavBar from "./NavBar";

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
  const [key, setKey] = useState(
    "?&key=$2a$10$k64D2VOaGCBynzK6r9E4GeAZKmgXwdSWjJwFdiicclaHlo6EPJmkO"
  );
  const [housesData, setHouses] = useState([]);

  useEffect(() => {
    axios.get("https://www.potterapi.com/v1/houses" + key).then(resp => {
      setHouses(resp.data);
    });
  }, []);

  /* This useEffect will be used the manipulate the data
      in a way that only the necessary components will be passed on
  
  useEffect(() => {
    console.log(housesData);
  }, [housesData]);
  */

  return (
    <React.Fragment>
      <CardContainer>
        {housesData.map(data => (
          <Card id={data.name} key={data.name}>
            <h1>{data.name}</h1>
          </Card>
        ))}
      </CardContainer>
    </React.Fragment>
  );
};

export default HouseList;
