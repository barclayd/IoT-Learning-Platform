import React, { Component } from 'react';
import './App.css';
import TemperatureData from "./containers/TemperatureData/TemperatureData";
import Layout from './hoc/Layout/Layout';
class App extends Component {

    render() {

    return (
      <div className="App">
        <Layout>
          <TemperatureData />
        </Layout>
      </div>
    );
  }
}

export default App;
