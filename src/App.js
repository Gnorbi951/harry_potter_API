import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path='/' component={Home}></Route>
      </Router>      
    </div>
  );
}

export default App;
