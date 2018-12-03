import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Model from '../../components/Model/Model';
import AppRouter from '../../routers/AppRouter';


const layout = (props) => {
    return (
        <React.Fragment>
            <Toolbar/>
            <Model>
                <AppRouter/>
            </Model>
        </React.Fragment>
    );
};

export default layout;
