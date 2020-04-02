import React, { useContext } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const { validLogin, setValidLogin } = useContext(LoginContext);

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: result => setValidLogin([result])
  });

  return (
    <div>
      {listening ? "Speak, I'm listening" : ""}
      <textarea value={validLogin} />
      <button onClick={listen}>Listen</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};
export default Login;
