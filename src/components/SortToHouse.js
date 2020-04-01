import React, { useContext } from "react";
import { SortContext } from "../context/SortContext";
import styled from "styled-components";
import Background from "../sortingBackGround.jpg";

const BackGround = styled.div`
  background-image: url(${Background});
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-size: cover;
  margin: 0;
`;

const SortToHouse = () => {
  const { sortHouses } = useContext(SortContext);
  const { fetchSortHouses } = useContext(SortContext);

  const sortToHouse = () => {
    fetchSortHouses();
    alert(sortHouses);
  };

  return (
    <BackGround>
      <button onClick={() => sortToHouse()}>Sorting Hat</button>
    </BackGround>
  );
};
export default SortToHouse;
