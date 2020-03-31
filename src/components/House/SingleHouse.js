import React, { useContext } from "react";
import { HouseContext } from "./HouseContext";

const SingleHouse = props => {
  const [houses] = useContext(HouseContext);

  console.log(houses);
  return <React.Fragment>kek</React.Fragment>;
};
export default SingleHouse;
