import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import NavBar from '../components/Navbar/Navbar';

const AppRouter = () => (
    <Provider>
        <BrowserRouter>
        <div>
            <NavBar />

            <Switch>

            </Switch>
        </div>
        </BrowserRouter>
    </Provider>
);

export default AppRouter;
