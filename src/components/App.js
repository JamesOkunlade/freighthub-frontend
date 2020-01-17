import React, { Component } from 'react';
import Routes from './Routes';
import '../styles/App.css';


// @withRouter
class App extends Component {
  render () {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
