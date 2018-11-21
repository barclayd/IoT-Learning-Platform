import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncData = asyncComponent(() => {
    return import('./containers/TemperatureData/TemperatureData');
});

class App extends Component {

    render() {

    return (
      <div className="App">
          <Route path='/test' exact  component={asyncData}/>
          <Layout>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
