import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import HouseList from "./components/House/HouseList";
import SingleHouse from "./components/House/SingleHouse";
import { HouseProvider } from "./context/HouseContext";
import NavBar from "./components/NavBar";
import Professors from "./components/Professors";
import Application from "./components/Application";
import { ProfessorsProvider } from "./context/ProfessorsContext";
import SortToHouse from "./components/SortToHouse";
import { SortProvider } from "./context/SortContext";
import { LoginContext } from "./context/LoginContext";
import Login from "./components/Login";
import About from "./components/About";

const App = () => {
  const { validLogin } = useContext(LoginContext);

  return (
    <React.Fragment>
      <Router>
        <Route
          exact
          path="/(professors|houses|sortingHat|about)"
          component={NavBar}
        ></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route
          render={() => (validLogin ? null : <Redirect to="/login" />)}
        ></Route>
        <Route exact path="/about" component={About}></Route>
        <HouseProvider>
          <Route
            exact
            path="/(professors|houses|application|sortingHat)"
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
        <Route exact path="/application" component={Application}></Route>
      </Router>
    </React.Fragment>
  );
};
export default App;
