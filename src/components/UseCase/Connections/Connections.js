import React from 'react'
import styles from './Connections.module.scss';


const Connections = (props) => {
    return (
       <div className={styles.Connections}>
       <h1>Configure Your Arduino</h1>
       <p>The breadboard for {props.useCaseData.arduinoName}</p>
       <img className={styles.ArduinoImg} alt="arduino" src={"/images/" + props.useCaseData.arduino} width="650px" aria-label={ props.useCaseData.arduino} />
       <p>{props.useCaseData.arduinoDesc}</p>
       </div>
    );
};

export default Connections;
