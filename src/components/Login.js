import React, { useContext, useState, useEffect } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import { LoginContext } from "../context/LoginContext";

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
    <div>
      {listening ? "Speak, I'm listening" : ""}
      <textarea value={result} />
      <button onClick={listen}>Listen</button>
    </div>
  );
};
export default Login;
