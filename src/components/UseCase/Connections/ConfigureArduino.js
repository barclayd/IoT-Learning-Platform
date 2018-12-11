import React from 'react'
import styles from './Connections.module.scss';
import {Redirect} from "react-router-dom";
import * as text from "../../../assets/staticText";
import {Icon, Tooltip} from "antd";


const ConfigureArduino = (props) => {

    let content;
    let redirect;
    const questionMarkStyle = {position: 'absolute', fontSize: '30px', right: '30px', top: '20px'};

    if(props.useCaseData !== undefined) {
        content =
            <React.Fragment>
                <h1>Configure Your Arudino</h1>
                <Tooltip title={text.configureArduino} placement="bottom">
                    <Icon type="question-circle" theme="filled" style={questionMarkStyle} defaultVisible={true}/>
                </Tooltip>
                <p>The breadboard for {props.useCaseData.arduinoName}</p>
                <img className={styles.ArduinoImg} alt="arduino" src={"/images/" + props.useCaseData.arduino} width="650px" aria-label={ props.useCaseData.arduino} />
                <p>{props.useCaseData.arduinoDesc}</p>
            </React.Fragment>
    } else {
        redirect = <Redirect to='/dashboard'/>
    }

    return (
       <div className={styles.Connections}>
           {redirect}
           {content}
       </div>
    );
};

export default ConfigureArduino;
