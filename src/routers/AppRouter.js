import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import {Provider} from 'react-redux';
import UseCase from '../components/UseCase/UseCase';
import UseCasesList from '../containers/UseCasesList/UseCasesList';
import Auth from "../containers/Auth/Auth";

const AppRouter = (props) => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={UseCasesList}/>
                <Route exact path="/login" component={Auth}/>
                <Route path="/usecases/:id" render={props => <UseCase {...props} />} />
            </Switch>

        </React.Fragment>
)};

export default AppRouter;
