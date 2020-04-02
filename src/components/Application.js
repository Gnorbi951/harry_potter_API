import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Owl } from "./subcomponents/KeyFrames";

const OwlImage = styled.img`
  margin: 0 auto;
  max-width: 300px;
  animation: ${Owl} 3s forwards 0s ease;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  animation: ${Owl} 3s forwards 0s ease;
`;
const Input = styled.input`
  width: 50%;
  padding: 1rem;
  margin: 1rem;
  border-radius: 20px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
  }
`;
const FieldContainer = styled.div`
  margin: 5rem auto;
  text-align: center;
  width: 60%;
`;

const Submit = styled.button`
  border: none;
  background-color: #843a24;
  color: white;
  padding: 1rem;
  font-size: 18px;
  border-radius: 10px;
  animation: ${Owl} 3s forwards 0s ease;
  cursor: pointer;
  &:hover {
    background-color: #59231b;
  }
`;

const Application = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    axios({
      method: "POST",
      url: "http://localhost:8888/application",
      data: {
        name: name,
        email: email
      }
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  return (
    <FieldContainer>
      <OwlImage
        src={require("./subcomponents/images/owl.jpg")}
        alt="Owl"
      ></OwlImage>
      <Form onSubmit={handleSubmit} method="POST">
        <Input
          type="text"
          id="name"
          placeholder="Name"
          autoComplete="off"
        ></Input>

        <Input
          type="email"
          id="email"
          placeholder="E-mail"
          autoComplete="off"
        ></Input>
        <Submit type="submit">submit application</Submit>
      </Form>
    </FieldContainer>
  );
};

export default Application;
