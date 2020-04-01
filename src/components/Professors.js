import React, { useContext } from "react";
import { ProfessorsContext } from "../ProfessorsContext";
import ProfessorsDetail from "./subcomponents/ProfessorsDetail";

const Professors = () => {
  const value = useContext(ProfessorsContext);
  console.log(value);
  const [professors] = useContext(ProfessorsContext);

  return (
    <React.Fragment>
      <ProfessorsDetail data={professors} />
    </React.Fragment>
  );
};
export default Professors;
