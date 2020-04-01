import React, { useContext, useState, useEffect } from "react";
import { HouseContext } from "../../context/HouseContext";
import axios from "axios";

const SingleHouse = props => {
  const { houses } = useContext(HouseContext);
  const [currentHouse, setCurrentHouse] = useState({});

  useEffect(() => {
    let house = houses.find(house => house._id === props.match.params.id);
    if (!house) {
      axios
        .get(
          `https://www.potterapi.com/v1/houses/${props.match.params.id}?&key=$2a$10$k64D2VOaGCBynzK6r9E4GeAZKmgXwdSWjJwFdiicclaHlo6EPJmkO`
        )
        .then(house => setCurrentHouse(house));
    }
    setCurrentHouse(house);
  }, []);

  return (
    <React.Fragment>
      <h1>{currentHouse.name}</h1>
      <h3>Mascot: {currentHouse.mascot}</h3>
      <h3>Head of House: {currentHouse.headOfHouse}</h3>
      <h3>Founder: {currentHouse.founder}</h3>

      <h1>Members</h1>
    </React.Fragment>
  );
};
export default SingleHouse;
