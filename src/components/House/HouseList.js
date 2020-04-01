import React, { useContext } from "react";
import { Card, CardContainer } from "../style/HouseStyle";
import { Link } from "react-router-dom";
import { HouseContext } from "../../context/HouseContext";

const HouseList = () => {
  const { houses } = useContext(HouseContext);
  document.body.style = "background: white;";

  return (
    <React.Fragment>
      <CardContainer>
        {houses.map(data => (
          <Link key={data.name} to={`/houses/${data._id}`}>
            <Card id={data.name}>
              <h1>{data.name}</h1>
            </Card>
          </Link>
        ))}
        <Link to="/sortingHat">
          <Card>Which house fits to you?</Card>
        </Link>
      </CardContainer>
    </React.Fragment>
  );
};

export default HouseList;
