import React, { Component } from 'react';
import logo from './logo.svg';
import Headline from 'react-grace-2';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        { Headline }
      </div>
    );
  }
}

export default App;