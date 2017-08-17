import React, { Component } from 'react';
import Head from './components/head';
import Body from './components/body'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    }
  }
  syncTime() {
    this.setState({
      time: new Date()
    })
  }
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
