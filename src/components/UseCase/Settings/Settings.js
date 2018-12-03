import React from 'react';
import SettingPanel from '../../../containers/Settings/Settings';


const settings = (props) => {
    return (
        <React.Fragment>
            <SettingPanel id={props.match.params.id}/>
        </React.Fragment>
    );
};

export default settings;
