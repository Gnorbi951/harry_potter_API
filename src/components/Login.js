import React, { useContext, useState, useEffect } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import { LoginContext } from "../context/LoginContext";
import styled from "styled-components";

const LoginBackground = styled.div`
  background-color: grey;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-size: cover;
  margin: 0;
`;
const SpeechBox = styled.div`
  color: #b9b384;
  text-align: center;
  width: 40%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 3rem;
  border-radius: 20px;
  font-size: 18px;
`;

const ListenButton = styled.button`
  border-radius: 8px;
`;

const Login = props => {
  const [result, setResult] = useState();
  const { validLogin, setValidLogin } = useContext(LoginContext);
  let loggedIn = false; // This is for preventing page reload because it's buggy in a functional component
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: result => {
      setResult(result);
      if (result === "alohomora" && loggedIn === false) {
        setValidLogin(true);
        props.history.push("/");
        stop();
        loggedIn = true;
      }
    }
  });

  useEffect(() => {}, [validLogin]);

  return (
    <LoginBackground>
      <h1>Welcome to our speech converter website!</h1>
      <SpeechBox>
        {listening ? <h3>Speak, I'm listening</h3> : "Let's get started"}
        <div>
          <textarea value={result} />
        </div>
        <ListenButton onClick={listen}>Listen</ListenButton>
      </SpeechBox>
    </LoginBackground>
  );
};
export default Login;
