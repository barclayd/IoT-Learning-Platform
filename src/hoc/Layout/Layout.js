import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Models from '../../components/Models/Models';


class Layout extends React.Component {
    state= {};

    render () {
        return (
            <>
                <Toolbar />
                <Models />
            </>
        );
    }
}

export default Layout;
