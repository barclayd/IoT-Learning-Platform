import React, { Component } from 'react';

import './App.css';
import TemperatureData from "./containers/TemperatureData/TemperatureData";

class App extends Component {

    render() {

    return (
      <div className="App">
        <TemperatureData />
      </div>
    );
  }
}

export default App;
