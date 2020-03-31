import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const HouseList = () => {
  const [key, setKey] = useState(
    "?&key=$2a$10$k64D2VOaGCBynzK6r9E4GeAZKmgXwdSWjJwFdiicclaHlo6EPJmkO"
  );
  const [housesData, setHouses] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.potterapi.com/v1/houses" + key)
      .then(resp => {
        setHouses(resp.data);
      })
      .then(console.log(housesData));
  }, []);

  return <div>kek</div>;
};

export default HouseList;
