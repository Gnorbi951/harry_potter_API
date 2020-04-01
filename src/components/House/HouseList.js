import React, { useContext } from "react";
import { Card, Logo } from "../style/HouseStyle";
import { Link } from "react-router-dom";
import { HouseContext } from "../../context/HouseContext";
import { findByLabelText } from "@testing-library/react";

const HouseList = () => {
  const { houses } = useContext(HouseContext);
  document.body.style = "background: #ccc;";
  let themes = {
    Gryffindor: "#E32E35",
    Slytherin: "#2F8C7D",
    Ravenclaw: "#39478A",
    Hufflepuff: "#FFAD34"
  };

  return (
    <React.Fragment>
      {houses.map(data => (
        <Link key={data.name} to={`/houses/${data._id}`}>
          <Card id={data.name} color={themes[data.name]}>
            <Logo src={require(`./${data.name}.png`)} />
            <h1>{data.name}</h1>
          </Card>
        </Link>
      ))}
      {/* <Link to="/sortingHat">
          <Card>Which house fits to you?</Card>
        </Link> */}
    </React.Fragment>
  );
};

export default HouseList;
