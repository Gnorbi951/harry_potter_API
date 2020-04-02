import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 2rem;
  padding: 1rem;
`;

const Header = styled.h1`
  font-size: 4rem;
`;

const Link = styled.div`
  margin: 0.5rem;
  padding: 1rem;
  margin-top: 2rem;
`;

const Creator = styled.li`
  margin-top: 0.5rem;
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
        <Link>
          <a href="https://github.com/Gnorbi951/harry_potter_API">
            Link to github repository
          </a>
        </Link>
        <Link>
          <a href="https://www.potterapi.com/">The API we used</a>
        </Link>
      </Container>
    </>
  );
};

export default About;
