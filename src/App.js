import React, { Component } from 'react';
import Head from './react/head';
import Body from './react/body';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Body />
      </div>
    );
  }
}

export default App;
