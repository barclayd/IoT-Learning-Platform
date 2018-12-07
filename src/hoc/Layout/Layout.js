import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Modal from '../../components/Modal/Modal';
import AppRouter from '../../routers/AppRouter';


const layout = (props) => {
    return (
        <React.Fragment>
            <Toolbar/>
            <Modal>
                <AppRouter/>
            </Modal>
        </React.Fragment>
    );
};

export default layout;
