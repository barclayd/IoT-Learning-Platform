import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import TemperatureData from "./containers/TemperatureData/TemperatureData";
import Layout from './hoc/Layout/Layout';
class App extends Component {

    render() {

    return (
      <div className="App">
          <Route path='/test' exact  component={TemperatureData}/>
          <Layout>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
