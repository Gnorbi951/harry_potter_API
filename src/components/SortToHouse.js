import React, { useContext } from "react";
import { SortContext } from "../context/SortContext";
import styled from "styled-components";
import Background from "../houses.png";
import { glowing } from "./subcomponents/KeyFrames";

const BackGround = styled.div`
  background-image: url(${Background});
  background-position: top;
  background-size: contain;
  width: 100%;
  min-height: 50vh;
  margin: 0;
  background-repeat: no-repeat;
`;

const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
  margin: 1rem auto;
  padding: 2rem;
`;

const SortButton = styled.button`
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: white;
  font-size: 18px;
  background: #d67e03;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowing} 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;

const Quote = styled.p`
  background-color: rgba(0, 0, 0, 0.3);
  margin: 5px auto;
  padding: 1rem 3rem;
  border-radius: 20px;
  width: 40%;
  font-style: italic;
  color: #5d3225;
`;

const Signature = styled.p`
  font-style: normal;
  color: black;
`;

const SortToHouse = () => {
  const { sortHouses } = useContext(SortContext);
  const { fetchSortHouses } = useContext(SortContext);

  const sortToHouse = () => {
    fetchSortHouses();
    alert(sortHouses);
  };

  return (
    <React.Fragment>
      <BackGround></BackGround>
      <SortContainer>
        <SortButton onClick={() => sortToHouse()}>Sorting Hat</SortButton>
        <p>
          The Sorting Hat is a sentient hat at Hogwarts that magically
          determines which of the four school Houses each new student belongs
          most to.Originally belonged to Godric Gryffindor, one of the founders
          of Hogwarts. It normally stays in the Headmaster's office until it is
          needed.
        </p>
        <Quote>
          "Oh you may not think I'm pretty, but don't judge on what you see,
          I'll eat myself if you can find a smarter hat than me."
          <Signature> —The Sorting Hat's opening lines in 1991</Signature>
        </Quote>
      </SortContainer>
    </React.Fragment>
  );
};
export default SortToHouse;
