import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 2rem auto;
  padding: 1rem;
  width: 50%;
  border-radius: 20px;
  border-top: 4px solid #278e81;
  border-bottom: 4px solid #278e81;
`;

const Header = styled.h1`
  font-size: 4rem;
  color: #278e81;
`;

const Link = styled.div`
  margin: 0.5rem;
  padding: 1rem;
  margin-top: 2rem;
`;

const Creator = styled.li`
  margin: 0.5rem;
  list-style: none;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
`;

const CustomLink = styled.a`
  text-decoration: none;
  color: teal;
  font-weight: bold;
`;

const About = () => {
  return (
    <>
      <Container>
        <Header>About us</Header>
        <h2>Creators of the site:</h2>
        <ul>
          <Creator>Evelin Szabados</Creator>
          <Creator>Norbert Gőcze</Creator>
          <Creator>Bence Losonczy</Creator>
          <Creator>Miklós Horváth</Creator>
        </ul>
        <Link style={{ textDecoration: "none", margin: "0" }}>
          <CustomLink href="https://github.com/Gnorbi951/harry_potter_API">
            Link to github repository
          </CustomLink>
        </Link>
        <Link style={{ textDecoration: "none", margin: "0" }}>
          <CustomLink href="https://www.potterapi.com/">
            The API we used
          </CustomLink>
        </Link>
      </Container>
    </>
  );
};

export default About;
