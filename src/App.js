import React, { Component } from 'react';
import './App.css';
import TopNav from './Nav';
import MainArea from './MainArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <MainArea />
      </div>
    );
  }
}

export default App;
