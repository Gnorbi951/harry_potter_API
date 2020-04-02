import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";

const ValidateLogin = () => {
  const [result, setResult] = useState();
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: result => setResult(result)
  });

  return (
    <div>
      {listening ? "Speak, I'm listening" : ""}
      <textarea value={result} />
      <button onClick={listen}>Listen</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};
export default ValidateLogin;
