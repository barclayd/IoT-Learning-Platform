import React from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import Models from '../../components/Model/Models';


class Layout extends React.Component {
    state= {};

    render () {
        return (
            <>
                <Navbar />
                <Models />
            </>
        );
    }
}

export default Layout;
