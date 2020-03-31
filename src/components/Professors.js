import React, { useState, useEffect } from "react";
import styled from "styled-components";
const ProfContainer = styled.div`
  margin: 6rem auto;
`;

const Professors = () => {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.potterapi.com/v1/characters?&key=$2a$10$k64D2VOaGCBynzK6r9E4GeAZKmgXwdSWjJwFdiicclaHlo6EPJmkO"
    )
      .then(res => res.json())
      .then(fetchedResult => {
        fetchedResult.filter(character => {
          if (
            String(character.role).includes("Professor") &&
            String(character.school).includes("Hogwarts")
          ) {
          }
        });
      });
  }, []);

  return <ProfContainer></ProfContainer>;
};
export default Professors;
