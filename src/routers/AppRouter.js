import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from '../components/Navbar/Navbar';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <NavBar />

            <Switch>

            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
