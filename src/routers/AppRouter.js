import React from 'react';
import {Switch, Route, withRouter, Redirect, Link} from 'react-router-dom';
import UseCase from '../components/UseCase/UseCase';
import UseCasesList from '../containers/UseCasesList/UseCasesList';
import Auth from "../containers/Auth/Auth";
import Logout from '../containers/Auth/Logout/Logout';
import AdminArea from '../containers/AdminArea/AdminArea';
import {connect} from 'react-redux';

const AppRouter = (props) => {
    let routes = (
        <Switch>
            <Route exact path="/" render={() => <p> Please <Link to='/login'>login</Link> to access the website</p>}/>
            <Route exact path="/login" component={Auth}/>
            <Route exact path="/logout" component={Logout}/>
            <Route exact path="/" render={() => <p> Please <Link to='/login'>login</Link> to access the website</p>}/>
        </Switch>
    );

    if(props.isAuthenticated || localStorage.getItem("email") !== null){
        routes =
            <Switch>
                <Route exact path="/usecases" component={UseCasesList}/>
                <Route exact path="/login" component={Auth}/>
                <Route exact path='/logout' component={Logout} />
                <Route path="/usecases/:id" render={props => <UseCase {...props} />} />
                <Redirect to='/usecases' component={UseCasesList}/>
            </Switch>
    }

    if(props.isAuthenticated && localStorage.getItem("role") === 'Trainer') {
        routes =
            <Switch>
                <Route exact path="/admin-area" component={AdminArea}/>
                <Route exact path="/usecases" component={UseCasesList}/>
                <Route exact path="/login" component={Auth}/>
                <Route exact path='/logout' component={Logout}/>
                <Route path="/usecases/:id" render={props => <UseCase {...props} />}/>
                <Redirect to='/usecases' component={UseCasesList}/>
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
