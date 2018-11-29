import React from 'react';
import {Switch, Route} from 'react-router-dom';
import UseCase from '../components/UseCase/UseCase';
import UseCasesList from '../containers/UseCasesList/UseCasesList';
import Auth from "../containers/Auth/Auth";
import Logout from '../containers/Auth/Logout/Logout';

const AppRouter = (props) => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={UseCasesList}/>
                <Route exact path="/login" component={Auth}/>
                <Route exact path='/logout' component={Logout} />
                <Route path="/usecases/:id" render={props => <UseCase {...props} />} />
            </Switch>

        </React.Fragment>
)};

export default AppRouter;
