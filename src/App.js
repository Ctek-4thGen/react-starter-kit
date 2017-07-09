import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

handleClick() {
  this.setState({number: this.state.number + 1})
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React: {this.state.number}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick = {this.handleClick}
        >
        click
        </button>
      </div>
    );
  }
}

export default App;
