import React from "react";
import { useState } from "react";

const House = props => {
  const [id, setId] = useState("");

  setId(props.match.params);
  return <div>{id}</div>;
};
export default House;
