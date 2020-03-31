import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import {ProfessorsContext} from '../ProfessorsContext';
import ProfessorsDetail from './subcomponents/ProfessorsDetail';

const ProfContainer = styled.div`
  margin: 6rem auto;
`;

const Professors = () => {
  const value = useContext(ProfessorsContext);
  console.log(value);
  const [professors, setProfessors] = useContext(ProfessorsContext);
               
  
  return (
    <React.Fragment>
      <ProfessorsDetail data={professors} />
    </React.Fragment>
    
  );
};
export default Professors;
