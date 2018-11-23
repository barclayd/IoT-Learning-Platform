import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
// import {Provider} from 'react-redux';
import UseCase from '../components/UseCase/UseCase'
import UseCasesList from '../containers/UseCasesList/UseCasesList'

const AppRouter = () => (
        <BrowserRouter>
        <div>
            <Switch>
                 <Route path="/usecases/:id" render={props => <UseCase {...props} />} />
                 <Route path="/" component={UseCasesList}/>
            </Switch>

        </div>
        </BrowserRouter>


);

export default AppRouter;
