import React from 'react';
import Navbar from './components/Navbar'
import Main from './components/LandingPage'
import Intro from './components/Intro'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Intro />
    </div>
  );
}

export default App;
