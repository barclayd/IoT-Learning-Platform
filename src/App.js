import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import TemperatureData from "./containers/TemperatureData/TemperatureData";
import Layout from './hoc/Layout/Layout';
class App extends Component {

    render() {

    return (
      <div className="App">
          <Switch>
              <Route path='/test' exact  component={TemperatureData}/>
          </Switch>
        <Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
