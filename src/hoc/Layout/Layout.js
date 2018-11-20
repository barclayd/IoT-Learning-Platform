import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Model from '../../components/Model/Model';
import UseCasesList from '../../containers/UseCasesList/UseCasesList';


class Layout extends React.Component {
    state= {};

    render () {
        return (
            <>
                <Toolbar />
                <Model>
                    <UseCasesList />
                </Model>
            </>
        );
    }
}

export default Layout;
