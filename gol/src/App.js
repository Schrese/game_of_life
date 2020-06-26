import React from 'react';
import './App.css';
import Game from './components/Game.js';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <TopDiv>
        <Title>Conway's Game of Life</Title>
      </TopDiv>
      {/* <Navbar /> */}
      <Game />
      {/* <About /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

const TopDiv = styled.div`
  height: 100px;
`

const Title = styled.h1`
  // background: #576E5A;
  background: #8ABA91;
  `