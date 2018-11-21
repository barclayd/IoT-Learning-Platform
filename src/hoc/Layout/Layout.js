import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Model from '../../components/Model/Model';
import UseCasesList from '../../containers/UseCasesList/UseCasesList';
import UseCase from '../../containers/UseCase/UseCase';


class Layout extends React.Component {
    state= {};

    render () {
        return (
            <>
                <Toolbar />
                <Model>
                    <UseCasesList />
                    {/*<UseCase/>*/}
                </Model>
            </>
        );
    }
}

export default Layout;
