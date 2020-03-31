import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const HouseContext = createContext();

export const HouseProvider = props => {
  const [key, setKey] = useState(
    "?&key=$2a$10$k64D2VOaGCBynzK6r9E4GeAZKmgXwdSWjJwFdiicclaHlo6EPJmkO"
  );
  const [housesData, setHouses] = useState([]);

  useEffect(() => {
    axios.get("https://www.potterapi.com/v1/houses" + key).then(resp => {
      setHouses(resp.data);
    });
  }, [key]);

  return (
    <HouseContext.Provider value={"lol"}>
      {props.children}
    </HouseContext.Provider>
  );
};
