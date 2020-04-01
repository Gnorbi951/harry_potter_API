import React, { useContext } from "react";
import { SortContext } from "../context/SortContext";

const SortToHouse = () => {
  const { sortHouses } = useContext(SortContext);
  const { fetchSortHouses } = useContext(SortContext);

  const sortToHouse = () => {
    fetchSortHouses();
    alert(sortHouses);
  };

  return (
    <div>
      <button onClick={() => sortToHouse()}>Sorting Hat</button>
    </div>
  );
};
export default SortToHouse;
