import React from 'react'
import styles from './Connections.module.scss';
import {Redirect} from "react-router-dom";


const Connections = (props) => {

    let content;
    let redirect;
    if(props.useCaseData !== undefined) {
        content =
            <React.Fragment>
                <h1>Connections</h1>
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

export default Connections;
