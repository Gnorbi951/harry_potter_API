import React, { useContext } from "react";
import {
  Card,
  Logo,
  LogoSection,
  TextSection,
  Cards,
  Name,
  SortingHat,
  SortingLink
} from "../style/HouseStyle";
import { Link } from "react-router-dom";
import { HouseContext } from "../../context/HouseContext";

const HouseList = () => {
  const { houses } = useContext(HouseContext);
  document.body.style = "background: white;";
  let themes = {
    Gryffindor: "#E32E35",
    Slytherin: "#2F8C7D",
    Ravenclaw: "#39478A",
    Hufflepuff: "#FFAD34"
  };
  let description = {
    Gryffindor:
      "'You might belong in Gryffindor, Where dwell the brave at heart,Their daring, nerve and chivalry,Set Gryffindors apart.'",
    Slytherin:
      "'Or perhaps in Slytherin You’ll make your real friends Those cunning folk use any means To achieve their ends'",
    Ravenclaw:
      "'Or yet in wise old Ravenclaw If you’ve a ready mind Where those of wit and learning Will always find their kind.'",
    Hufflepuff:
      "'You might belong in Hufflepuff Where they are just and loyal Those patient Hufflepuffs are true And unafraid of toil.'"
  };

  return (
    <React.Fragment>
      <SortingHat>
        <p>Which house fits you?</p>
        <Link style={{ textDecoration: "none" }} to="/sortingHat">
          <SortingLink>Ask the Sorting Hat!</SortingLink>
        </Link>
      </SortingHat>

      <Cards>
        {houses.map(data => (
          <Card color={themes[data.name]} id={data.name}>
            <LogoSection>
              <Link
                style={{ textDecoration: "none" }}
                key={data.name}
                to={`/houses/${data._id}`}
              >
                <Logo src={require(`./${data.name}.png`)} />
                <Name>{data.name}</Name>
              </Link>
            </LogoSection>
            <TextSection>{description[`${data.name}`]}</TextSection>
          </Card>
        ))}
      </Cards>
    </React.Fragment>
  );
};

export default HouseList;
