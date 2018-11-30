import React from 'react'
import styles from './Connections.module.scss';


const Connections = (props) => {
    console.log("Render Connections...");
    return (
       <div className={styles.Connections}>
       <h1>Connections</h1>
       <p>The breadboard for {props.useCaseData.arduinoName}</p>
       <img className={styles.ArduinoImg} alt="arduino" src={"/images/" + props.useCaseData.arduino} width="650px" aria-label={ props.useCaseData.arduino} />
       <p>{props.useCaseData.arduinoDesc}</p>
       </div>
    );
};

// const mapStateToProps = state => {
//     return {
//         useCases: state.useCaseData.useCases,
//     }
// };



export default Connections;
