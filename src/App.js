import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
