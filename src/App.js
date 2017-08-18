import React, { Component } from 'react';
import Head from './components/head';
import Body from './components/body'
import BodyInfo from './components/bodyInfo'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
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
      <Router>
        <div className="App">
          <Head />
          <Route path="/0" component={Body}/>
          <Route path="/1" component={BodyInfo}/>
        </div>
      </Router>
    );
  }
}
export default App;
