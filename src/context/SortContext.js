import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const SortContext = createContext();

const key =
  "?&key=$2a$10$k64D2VOaGCBynzK6r9E4GeAZKmgXwdSWjJwFdiicclaHlo6EPJmkO";

export const SortProvider = props => {
  const [sortHouses, setSortHouses] = useState("");

  const fetchSortHouses = () => {
    axios.get("https://www.potterapi.com/v1/sortingHat" + key).then(resp => {
      setSortHouses(resp.data);
    });
  };
  useEffect(fetchSortHouses, []);

  return (
    <SortContext.Provider value={{ sortHouses, fetchSortHouses }}>
      {props.children}
    </SortContext.Provider>
  );
};
