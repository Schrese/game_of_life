import React from 'react';
import './App.css';
import Game from './components/Game.js'

function App() {
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      {/* <Navbar /> */}
      <Game />
      {/* <About /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
