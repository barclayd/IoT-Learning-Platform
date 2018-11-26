import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncData = asyncComponent(() => {
    return import('./containers/TemperatureData/TemperatureData');
});

const asyncCharts = asyncComponent(() => {
    return import('./components/Charts/Charts');
});

class App extends Component {

    render() {

    return (
      <div className="App">
          <Route path='/test' exact  component={asyncData}/>
          <Route path='/charts' exact  component={asyncCharts}/>
          <Layout>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
