import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import NavBar from "./NavBar";

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
      {housesData.map(data => (
        <div key={data.name}>
          <h1>{data.name}</h1>
        </div>
      ))}
    </React.Fragment>
  );
};

export default HouseList;
