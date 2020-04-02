import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const HouseContext = createContext();

export const APIKey =
  "?&key=$2a$10$UBcvxLOw7cLZMbrQME/u3eSCZZ.E9qRUhPT93HVD42i69IJuokjaq";

export const HouseProvider = props => {
  const [houses, setHouses] = useState([]);

  const fetchAllHouses = () => {
    axios.get("https://www.potterapi.com/v1/houses" + APIKey).then(resp => {
      setHouses(resp.data);
    });
  };

  useEffect(fetchAllHouses, []);

  return (
    <HouseContext.Provider value={{ houses, fetchAllHouses }}>
      {props.children}
    </HouseContext.Provider>
  );
};
