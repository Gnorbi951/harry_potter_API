import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Professors from "./components/Professors";


import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/professors" component={NavBar}></Route>
        <Route exact path="/professors" component={Professors}></Route>
      </Router>
    </React.Fragment>
  );
};

export default App;
