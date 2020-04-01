import React, { useContext } from "react";
import { ProfessorsContext } from "../context/ProfessorsContext";
import ProfessorsDetail from "./subcomponents/ProfessorsDetail";
import Background from "../profback.jpg";
import { Link, animateScroll as scroll } from "react-scroll";

import "../App.css";

import styled from "styled-components";

const ProfHeader = styled.div`
  background-image: url(${Background});
  background-position: center;
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
  color: white;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
`;

const ProfMainBtn = styled.button`
  padding: 10px;
  background-color: #51588e;
  color: white;
  border: none;
`;

const Professors = () => {
  const value = useContext(ProfessorsContext);
  console.log(value);
  const [professors] = useContext(ProfessorsContext);

  return (
    <React.Fragment>
      <ProfHeader>
        <ProfText>
          "Professors have a long and valued history within the wizarding world.
          We teach across a broad set of specialised subjects and mould young
          minds. But don't be fooled, while some may underestimate us,
          Professors are never to be trifled with. Look no further than the
          Battle of Hogwarts for your proof."{" "}
          <p>
            —Minerva McGonagall addressing members of the S.O.S. wanting to
            pursue a career as a Profesor
          </p>
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
