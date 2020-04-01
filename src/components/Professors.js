import React, { useContext } from "react";
import { ProfessorsContext } from "../context/ProfessorsContext";
import ProfessorsDetail from "./subcomponents/ProfessorsDetail";
import Background from "../profback.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import { keyFrameMainPage } from "./subcomponents/KeyFrames";

import "../App.css";

import styled from "styled-components";

const ProfHeader = styled.div`
  background-image: url(${Background});
  background-position: bottom;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-size: cover;
  margin: 0;
`;
const ProfText = styled.div`
  color: #b9b384;
  text-align: center;
  width: 40%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 3rem;
  border-radius: 20px;
  font-size: 18px;
  animation: ${keyFrameMainPage} 3s forwards 0s ease;
`;

const ProfMainBtn = styled.button`
  padding: 1rem;
  background-color: #b9b384;
  color: #404040;
  border: none;
  font-size: 18px;
  margin: 1rem;
  border-radius: 10px;
  animation: ${keyFrameMainPage} 3s forwards 0s ease;

  &:hover {
    cursor: pointer;
    background-color: #404040;
    color: white;
  }
`;

const Professors = () => {
  const value = useContext(ProfessorsContext);
  const [professors] = useContext(ProfessorsContext);

  return (
    <React.Fragment>
      <ProfHeader>
        <ProfText>
          "Professors have a long and valued history within the wizarding world.
          We teach across a broad set of specialised subjects and mould young
          minds. But don't be fooled, while some may underestimate us,
          Professors are never to be trifled with. Look no further than the
          Battle of Hogwarts for your proof." <p>—Minerva McGonagall</p>
        </ProfText>
        <Link
          activeClass="active"
          to="professors"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ProfMainBtn>Our Professors</ProfMainBtn>
        </Link>
      </ProfHeader>

      <ProfessorsDetail data={professors} id="professors" />
    </React.Fragment>
  );
};
export default Professors;
