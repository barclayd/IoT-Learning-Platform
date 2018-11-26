import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import {Provider} from 'react-redux';
import UseCase from '../components/UseCase/UseCase'
import UseCasesList from '../containers/UseCasesList/UseCasesList'

const AppRouter = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={UseCasesList}/>
                <Route path="/usecases/:id" render={props => <UseCase {...props} />} />
            </Switch>
            
        </div>
)};

export default AppRouter;
