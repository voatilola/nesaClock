import React, { Component } from 'react';
import Clock from './Components/Clock';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div className="App-header">
        <Clock></Clock>
      </div>
    )
  }
}

