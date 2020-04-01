import React, { useContext, useState, useEffect } from "react";
import { HouseContext, APIKey } from "../../context/HouseContext";
import axios from "axios";

const SingleHouse = props => {
  const { houses } = useContext(HouseContext);
  const [currentHouse, setCurrentHouse] = useState({});
  const [membersId, setMembersId] = useState([]);
  const [members, setMembers] = useState([]);

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
    axios
      .get(`https://www.potterapi.com/v1/characters/${APIKey}`)
      .then(resp => {
        console.log(resp.data);
        let houseStudents = [];
        resp.data.forEach(character => {
          if (membersId.includes(character._id)) {
            houseStudents.push(character);
          }
        });
        setMembers(houseStudents);
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
        {members.map(element => (
          <li>{element.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default SingleHouse;
