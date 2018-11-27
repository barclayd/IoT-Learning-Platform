import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Model from '../../components/Model/Model';
import AppRouter from '../../routers/AppRouter';


class Layout extends React.Component {
    state= {};

    render () {
        return (
            <>
                <Toolbar />
                <Model>
                    <AppRouter />
                    {/*<UseCase/>*/}
                </Model>
            </>
        );
    }
}

export default Layout;
