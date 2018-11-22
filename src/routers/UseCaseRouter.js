import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const UseCaseRouter = () => (
    <BrowserRouter>
    <div>
        <Switch>
            <Route path="match/Information"/>
            <Route path="match/Connection"/>
            <Route path="match/Readings"/>
            <Route path="match/HistoricData"/>
        </Switch>

    </div>
    </BrowserRouter>


);

export default UseCaseRouter;