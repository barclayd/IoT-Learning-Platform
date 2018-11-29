import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import UseCase from '../components/UseCase/UseCase';
import UseCasesList from '../containers/UseCasesList/UseCasesList';
import Auth from "../containers/Auth/Auth";
import Logout from '../containers/Auth/Logout/Logout';
import {connect} from 'react-redux';

const AppRouter = (props) => {
    let routes = (
        <Switch>
            <Route exact path="/" component={UseCasesList}/>
            <Route exact path="/login" component={Auth}/>
            <Route exact path="/logout" component={Logout}/>
            <Redirect to='/'/>
        </Switch>
    );

    if(props.isAuthenticated){
        routes =
            <Switch>
                <Route exact path="/" component={UseCasesList}/>
                <Route exact path="/login" component={Auth}/>
                <Route exact path='/logout' component={Logout} />
                <Route path="/usecases/:id" render={props => <UseCase {...props} />} />
                <Redirect to='/'/>
            </Switch>
    }

    return (
        <React.Fragment>
            {routes}
        </React.Fragment>
)};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
};

export default withRouter(connect(mapStateToProps)(AppRouter));
