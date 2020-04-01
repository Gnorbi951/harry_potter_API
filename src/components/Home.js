import React from "react";
import styled from "styled-components";
import Background from "../back.jpg";
import NavBar from "./NavBar";
import { keyFrameMainPage } from "./subcomponents/KeyFrames";

const MainPage = styled.div`
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

const MainButton = styled.button`
  background-color: rgba(207, 87, 0, 0.65);
  padding: 1rem 1.2rem;
  border: none;
  border-radius: 10px;
  color: white;
  animation: ${keyFrameMainPage} 3s forwards 0s ease;
  &:hover {
    background-color: teal;
    cursor: pointer;
  }
`;

const MainTitle = styled.h1`
  color: white;
  animation: ${keyFrameMainPage} 3s forwards 0s ease;
`;
const NavContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100vw;
`;

const Home = () => {
  return (
    <MainPage>
      <NavContainer>
        <NavBar />
      </NavContainer>
      <MainTitle>Hogwarts School of Witchcraft and Wizardry</MainTitle>
      <MainButton>Check out our Houses</MainButton>
    </MainPage>
  );
};

export default Home;
