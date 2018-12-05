import React, { Component } from 'react';
import './App.css';
import {withRouter } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';

class App extends Component {

    componentDidMount() {
        this.props.onTryAutoSignIn();
    }

    render() {

    return (
      <div className="App">
          <Layout>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !==null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignIn: () => dispatch(actions.authCheckState())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
