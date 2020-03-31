import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import ProfessorsDetail from "./subcomponents/ProfessorsDetail";

const ProfContainer = styled.div`
  margin: 6rem auto;
`;

const Professors = () => {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.potterapi.com/v1/characters?&key=$2a$10$k64D2VOaGCBynzK6r9E4GeAZKmgXwdSWjJwFdiicclaHlo6EPJmkO"
      )
      .then(res => {
        const professorData = res.data;
        let professorList = [];
        professorData.filter(character => {
          if (
            String(character.role).includes("Professor") &&
            String(character.school).includes("Hogwarts")
          ) {
            let course = character.role.split(",");
            character["course"] = course[1];
            character["image"] = `./images/${character._id}.jpg`;
            professorList.push(character);
          }
        });
        setProfessors(professorList);
      });
  }, []);

  return (
    <React.Fragment>
      <ProfessorsDetail data={professors} />
    </React.Fragment>
  );
};
export default Professors;
