import React, { useContext, useState, useEffect } from "react";
import { HouseContext, APIKey } from "../../context/HouseContext";
import {
  HouseContainer,
  Description,
  HouseName,
  Members,
  Student,
  StudentName
} from "../style/HouseStyle";
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
        let houseStudents = [];
        resp.data.forEach(character => {
          if (
            membersId.includes(character._id) &&
            String(character.role).includes("student")
          ) {
            houseStudents.push(character);
          }
        });
        setMembers(houseStudents);
      });
  }, [membersId]);

  let themes = {
    Gryffindor: "#E32E35",
    Slytherin: "#2F8C7D",
    Ravenclaw: "#39478A",
    Hufflepuff: "#FFAD34"
  };

  let description = {
    Gryffindor:
      'Gryffindor values bravery, daring, nerve, and chivalry. Its emblematic animal is the lion and its colours are scarlet and gold. Minerva McGonagall was the most recent Head of Gryffindor. Sir Nicholas de Mimsy-Porpington, also known as "Nearly Headless Nick", was the house ghost. The founder of the house was Godric Gryffindor. Gryffindor corresponds to the element of Fire. The common room was located in one of the highest towers at Hogwarts, the entrance was situated on the seventh floor in the east wing of the castle and is guarded by a portrait of The Fat Lady. She permits entrance if given the correct password, which is changed numerous times throughout the school year. Famous Gryffindors include Albus Dumbledore, Harry Potter, and Minerva McGonagall.',
    Slytherin:
      "  Slytherin house values ambition, cunning and resourcefulness and was founded by Salazar Slytherin. Its emblematic animal is the serpent, and its colours are emerald green and silver. Professor Horace Slughorn was the Head of Slytherin during the 1997–1998 school year, replacing Severus Snape, who as well, replaced Slughorn as Potions Professor when he retired for the first time several years prior.",
    Ravenclaw:
      'Ravenclaw values intelligence, knowledge, and wit. Its emblematic animal is the eagle, and its colours are blue and bronze. The Ravenclaw Head of House in the 1990s was Filius Flitwick. The ghost of Ravenclaw is the Grey Lady, who was the daughter of Rowena Ravenclaw, the house\'s founder. Ravenclaw corresponds to the element of air. The Ravenclaw common room and dormitories are located in a tower on the west side of the castle. Ravenclaw students must answer a riddle as opposed to giving a password to enter their dormitories. This riddle, however, can be answered by non-Ravenclaws. Famous Ravenclaws include Gilderoy Lockheart, Ignatia Wildsmith (inventor of Floo powder), and Garrick Ollivander. It is rumoured that Alastor "Mad-Eye" Moody was a Ravenclaw.',
    Hufflepuff:
      "Hufflepuff values hard work, dedication, patience, loyalty, and fair play. Its emblematic animal is the badger, and Yellow and Black are its colours. Pomona Sprout was the Head of Hufflepuff during 1991-1998, Sprout left the post of Head of Hufflepuff and Herbology Professor sometime before 2017 and her successor for the position of Head of Hufflepuff is currently unknown. The Fat Friar is its ghost. The founder of the house was Helga Hufflepuff."
  };

  return (
    <HouseContainer>
      <Description color={themes[`${currentHouse.name}`]}>
        <HouseName color={themes[`${currentHouse.name}`]}>
          {currentHouse.name}
        </HouseName>
        <p>{description[`${currentHouse.name}`]}</p>
        <h3>Mascot: {currentHouse.mascot}</h3>
        <h3>Head of House: {currentHouse.headOfHouse}</h3>
        <h3>Founder: {currentHouse.founder}</h3>
      </Description>
      <HouseName color={themes[`${currentHouse.name}`]}>
        Famous Students
      </HouseName>
      <Members>
        {members.map(element => (
          <Student color={themes[`${currentHouse.name}`]}>
            <StudentName color={themes[`${currentHouse.name}`]}>
              {element.name}
            </StudentName>
            <span>Blood: {element.bloodStatus}</span>
            <span>Role: {element.role} </span>
          </Student>
        ))}
      </Members>
    </HouseContainer>
  );
};
export default SingleHouse;
