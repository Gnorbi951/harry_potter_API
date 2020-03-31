import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarHeader = styled.header`
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100vw;
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
    <NavBarHeader className="navbar">
      <MyLink className="menuElement">About</MyLink>
      <MyLink className="menuElement">Houses</MyLink>
      <MyLink className="menuElement" to={"/professors"}>
        Professors
      </MyLink>
      <MyLink className="menuElement">Famous Students</MyLink>
      <MyLink className="menuElement">Courses</MyLink>
    </NavBarHeader>
  );
};

export default NavBar;
