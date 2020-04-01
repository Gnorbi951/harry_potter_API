import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import HouseList from "./components/House/HouseList";
import SingleHouse from "./components/House/SingleHouse";
import { HouseProvider } from "./context/HouseContext";
// import NavBar from "./components/NavBar";
import NavBar from "./components/NavBar";
import Professors from "./components/Professors";
import { ProfessorsProvider } from "./context/ProfessorsContext";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Router>
          <Route exact path="/" component={Home}></Route>
        <HouseProvider>
          <Route exact path="/houses" component={HouseList}></Route>
          <Route path="/houses/:id" component={SingleHouse}></Route>
        </HouseProvider>
      <ProfessorsProvider>
          <Route exact path="/professors" component={NavBar}></Route>
          <Route exact path="/professors" component={Professors}></Route>
      </ProfessorsProvider>
      </Router>
    </React.Fragment>
  );
};

export default App;
