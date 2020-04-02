import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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
import { LoginContext } from "./context/LoginContext";
import Login from "./components/Login";

const App = () => {
  const { validLogin } = useContext(LoginContext);
  const [isMuggle, setIsMuggle] = useState();
  const [result, setResult] = useState([]);

  function setMuggle() {
    // {[result] = "kutya" ? setIsMuggle(false) : setIsMuggle(true) }
    if (result[result.length - 1] === "kutya") {
      setIsMuggle(false);
    }
    console.log([result]);
  }

  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route
          render={() => (validLogin ? null : <Redirect to="/login" />)}
        ></Route>
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
};
export default App;
