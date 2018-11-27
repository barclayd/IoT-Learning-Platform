import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import {Provider} from 'react-redux';
import UseCase from '../components/UseCase/UseCase'
import UseCasesList from '../containers/UseCasesList/UseCasesList'

const AppRouter = (props) => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={UseCasesList}/>
                <Route path="/usecases/:id" render={props => <UseCase {...props} />} />
            </Switch>

        </React.Fragment>
)};

export default AppRouter;
