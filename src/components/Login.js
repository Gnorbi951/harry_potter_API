import React, { useContext, useState, useEffect } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import { LoginContext } from "../context/LoginContext";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import App from "../App";

const Login = props => {
  const [result, setResult] = useState();
  const { validLogin, setValidLogin } = useContext(LoginContext);

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: result => {
      setResult(result);
      if (result === "alohomora") {
        setValidLogin(true);
        props.history.push("/");
      }
    }
  });

  useEffect(() => {}, [validLogin]);

  return (
    <div>
      {listening ? "Speak, I'm listening" : ""}
      <textarea value={result} />
      <button onClick={listen}>Listen</button>
    </div>
  );
};
export default Login;
