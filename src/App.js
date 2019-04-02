import React, { Component } from 'react';
import './App.css';
import Game from './components/game';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>TIC-TAC-TOE</h1>
          <Game />
      </div>
    );
  }
}

export default App;
