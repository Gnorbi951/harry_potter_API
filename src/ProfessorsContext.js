import React, {useState, createContext, useEffect} from 'react';
import axios from "axios";

export const ProfessorsContext = createContext();

export const ProfessorsProvider = props => {
    const [professors, setProfessors] = useState([]);

    const fetchAllProfessors = () => {
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
            character["image"] = ./images/${character._id}.jpg;
            professorList.push(character);
            console.log(character.name);
          }
        });
        setProfessors(Array.from(professorList));
      });
    }

    useEffect(fetchAllProfessors, [])

    return(
        <ProfessorsContext.Provider value={[professors, setProfessors]}>
            {props.children}
        </ProfessorsContext.Provider>
    );
};