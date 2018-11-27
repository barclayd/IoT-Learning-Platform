import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import TemperatureData from './containers/TemperatureData/TemperatureData';
import MockData from './containers/TemperatureData/MockData';
const asyncData = asyncComponent(() => {
    return import('./containers/TemperatureData/TemperatureData');
});

const asyncCharts = asyncComponent(() => {
    return import('./containers/Charts/HistoricCharts');
});

class App extends Component {

    render() {

    return (
      <div className="App">
          <Route path='/test' exact  component={asyncData}/>
          <Route path='/charts' exact  component={asyncCharts}/>
          <Route path='/data' exact  component={TemperatureData}/>
          <Route path='/mock' exact  component={MockData}/>
          <Layout>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
