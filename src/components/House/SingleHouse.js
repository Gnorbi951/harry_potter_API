import React, { useContext, useState, useEffect } from "react";
import { HouseContext, APIKey } from "../../context/HouseContext";
import axios from "axios";

const SingleHouse = props => {
  const { houses } = useContext(HouseContext);
  const [currentHouse, setCurrentHouse] = useState({});
  const [membersId, setMembersId] = useState([]);
  const [members, setMembers] = useState([{}]);

  useEffect(() => {
    let house = houses.find(house => house._id === props.match.params.id);
    if (!house) {
      axios
        .get(
          `https://www.potterapi.com/v1/houses/${props.match.params.id}${APIKey}`
        )
        .then(house => setCurrentHouse(house.data));
    } else {
      setCurrentHouse(house);
      setMembersId(house.members);
    }
  }, [houses, props.match.params.id]);

  useEffect(() => {
    membersId.map(_id => {
      axios
        .get(`https://www.potterapi.com/v1/characters/${_id}/${APIKey}`)
        .then(resp => {
          setMembers(...members, resp.data);
        });
    });
  }, [membersId]);

  return (
    <React.Fragment>
      <h1>{currentHouse.name}</h1>
      <h3>Mascot: {currentHouse.mascot}</h3>
      <h3>Head of House: {currentHouse.headOfHouse}</h3>
      <h3>Founder: {currentHouse.founder}</h3>

      <h1>Members</h1>
      <ul>
        {membersId.map(element => (
          <li>{element}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default SingleHouse;
