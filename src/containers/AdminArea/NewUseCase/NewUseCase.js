import React from 'react';
import AddNewUseCase from '../../AddNewUseCase/AddNewUseCase';
import {Divider, Icon, Tooltip} from "antd";
import * as text from "../../../assets/staticText";



const NewUseCase = (props) => {

    const questionMarkStyle = {position: 'absolute', fontSize: '35px', left: '645px',top: '0px'};


    return (
        <React.Fragment>
            <h2 style={{display: 'inline'}}>New Use Case</h2>
            <Tooltip title={text.newUseCase}>
                <Icon type="question-circle" theme="filled" style={questionMarkStyle} defaultVisible={true}/>
            </Tooltip>
            <Divider/>
            <div style={{marginTop: '-100px', marginLeft: '150px'}}>
            <AddNewUseCase id={props.useCases.length} users={props.users} sensors={props.sensors}/>
            </div>
        </React.Fragment>);
};



export default NewUseCase;
