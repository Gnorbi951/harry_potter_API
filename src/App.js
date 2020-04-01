import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Professors from "./components/Professors";
import { ProfessorsProvider } from "./ProfessorsContext";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <ProfessorsProvider>
        <Router>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/professors" component={NavBar}></Route>
          <Route exact path="/professors" component={Professors}></Route>
        </Router>
      </ProfessorsProvider>
    </React.Fragment>
  );
};

export default App;
