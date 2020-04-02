import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarHeader = styled.header`
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
`;

const MyLink = styled(Link)`
  margin: 0.8rem 1rem;
  color: white;
  text-decoration: none;
  &:hover {
    transition: 0.5s;
    color: orange;
  }
`;

const NavBar = () => {
  return (
    <NavBarHeader>
      <MyLink className="menuElement" to={"/"}>
        Home
      </MyLink>
      <MyLink className="menuElement" to={"/about"}>
        About
      </MyLink>
      <MyLink to={"/houses"} className="menuElement">
        Houses
      </MyLink>
      <MyLink className="menuElement" to={"/professors"}>
        Professors
      </MyLink>

      <MyLink className="menuElement">Courses</MyLink>
    </NavBarHeader>
  );
};

export default NavBar;
