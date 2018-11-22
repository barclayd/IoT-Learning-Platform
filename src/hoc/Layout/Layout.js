import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Model from '../../components/Model/Model';
import UseCasesList from '../../containers/UseCasesList/UseCasesList';
import UseCase from '../../containers/UseCase/UseCase';
import Routes from '../../routers/AppRouter';


class Layout extends React.Component {
    state= {};

    render () {
        return (
            <>
                <Toolbar />
                <Model>
                    <Routes />
                    {/*<UseCase/>*/}
                </Model>
            </>
        );
    }
}

export default Layout;
