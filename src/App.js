import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import HouseList from "./components/House/HouseList";
import SingleHouse from "./components/House/SingleHouse";
import { HouseProvider } from "./components/House/HouseContext";
// import NavBar from "./components/NavBar";
import "./App.css";
import House from "./components/House/House";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={Home}></Route>
        <HouseProvider>
          <Route path="/houses/:id" component={SingleHouse}></Route>
          <Route exact path="/houses" component={HouseList}></Route>
        </HouseProvider>
      </Router>
    </React.Fragment>
  );
};

export default App;
