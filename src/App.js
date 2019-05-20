import React, { Component } from 'react';
import logo from './logo.svg';
import Banner from './banner';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Routing App</h2>
        </div>
        <Banner />
      </div>
    );
  }
}

export default App;
