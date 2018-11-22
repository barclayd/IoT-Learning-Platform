import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Model from '../../components/Model/Model';
import Routes from '../../routers/AppRouter';


class Layout extends React.Component {
    state= {};

    render () {
        return (
            <>
                <Toolbar />
                <Model>
                    <Routes />
                </Model>
            </>
        );
    }
}

export default Layout;
