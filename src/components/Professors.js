import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import {ProfessorsContext} from '../ProfessorsContext';

const ProfContainer = styled.div`
  margin: 6rem auto;
`;

const Professors = () => {
  const value = useContext(ProfessorsContext);
  console.log(value);
  const [professors, setProfessors] = useContext(ProfessorsContext);
  

  return (
    
    <React.Fragment>     
        
        {professors.map(prof => (
          <p key={prof.id}>{prof.name}</p>
        ))}
            
    </React.Fragment>
    
  );
};
export default Professors;
