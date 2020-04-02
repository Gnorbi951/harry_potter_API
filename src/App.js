import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import HouseList from "./components/House/HouseList";
import SingleHouse from "./components/House/SingleHouse";
import { HouseProvider } from "./context/HouseContext";
import NavBar from "./components/NavBar";
import Professors from "./components/Professors";
import { ProfessorsProvider } from "./context/ProfessorsContext";
import SortToHouse from "./components/SortToHouse";
import { SortProvider } from "./context/SortContext";
import { useSpeechRecognition } from "react-speech-kit";

function placeHolder() {
  return <React.Fragment>nono</React.Fragment>;
}

function returnFunct() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={Home}></Route>
        <HouseProvider>
          <Route
            path="/(professors|houses|sortingHat)"
            component={NavBar}
          ></Route>
          <Route exact path="/houses" component={HouseList}></Route>
          <Route path="/houses/:id" component={SingleHouse}></Route>
        </HouseProvider>
        <SortProvider>
          <Route exact path="/sortingHat" component={SortToHouse}></Route>
        </SortProvider>
        <ProfessorsProvider>
          <Route exact path="/professors" component={Professors}></Route>
        </ProfessorsProvider>
      </Router>
    </React.Fragment>
  );
}

function App() {
  const [isMuggle, setIsMuggle] = useState();
  const [result, setResult] = useState([]);
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: result => setResult([result])
  });

  function setMuggle() {
    // {[result] = "kutya" ? setIsMuggle(false) : setIsMuggle(true) }
    if (result[result.length - 1] === "kutya") {
      setIsMuggle(false);
    }
    console.log([result]);
  }

  return (
    <div>
      {listening ? "Speak, I'm listening" : ""}
      <textarea value={result} />
      <button onClick={listen}>Listen</button>
      <button
        onClick={() => {
          stop();
          setMuggle();
        }}
      >
        Stop
      </button>
      {isMuggle === false ? returnFunct() : ""}
    </div>
  );
}
export default App;
