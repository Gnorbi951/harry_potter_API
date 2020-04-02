import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const ProfessorsContext = createContext();

export const ProfessorsProvider = props => {
  const [professors, setProfessors] = useState([]);

  const fetchAllProfessors = () => {
    axios
      .get(
        "https://www.potterapi.com/v1/characters?&key=$2a$10$UBcvxLOw7cLZMbrQME/u3eSCZZ.E9qRUhPT93HVD42i69IJuokjaq"
      )
      .then(res => {
        const professorData = res.data;
        let professorList = [];
        professorData.forEach(character => {
          if (
            String(character.role).includes("Professor") &&
            String(character.school).includes("Hogwarts")
          ) {
            let course = character.role.split(",");
            character["course"] = course[1];
            character["image"] = `./images/${character._id}.jpg`;
            character.rating = 1;
            professorList.push(character);
          }
        });
        setProfessors(Array.from(professorList));
      });
  };

  useEffect(fetchAllProfessors, [professors.rating]);

  return (
    <ProfessorsContext.Provider value={[professors, setProfessors]}>
      {props.children}
    </ProfessorsContext.Provider>
  );
};
