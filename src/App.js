import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import NavBar from "./components/nav/NavBar";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App-container">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/services" component={Services} />
        </div>
      </Router>
    );
  }
}

export default App;
