import React from "react";
import styled from "styled-components";
import Background from "../back.jpg";

const MainPage = styled.div`
  background-image: url(${Background});
  background-position: center;
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-size: cover;
  margin: 0;
`;

const MainButton = styled.button`
  background-color: rgba(207, 87, 0, 0.65);
  padding: 1rem 1.2rem;
  border: none;
  border-radius: 10px;
  color: white;
  &:hover {
    background-color: teal;
    cursor: pointer;
  }
`;

const MainTitle = styled.h1`
  color: white;
`;

const Home = () => {
  return (
    <MainPage>
      <MainTitle>Hogwarts School of Witchcraft and Wizardry</MainTitle>
      <MainButton>Check out our Houses</MainButton>
    </MainPage>
  );
};

export default Home;
