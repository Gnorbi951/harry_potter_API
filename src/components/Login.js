import React, { useContext, useState, useEffect } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const [result, setResult] = useState();
  const { validLogin, setValidLogin } = useContext(LoginContext);

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: result => setResult(result)
  });

  useEffect(() => {
    if (result === "kutya") {
      setValidLogin(true);
    }
  }, [result]);

  return (
    <div>
      {listening ? "Speak, I'm listening" : ""}
      <textarea value={result} />
      <button onClick={listen}>Listen</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};
export default Login;
