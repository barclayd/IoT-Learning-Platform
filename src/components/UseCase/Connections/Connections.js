import React from 'react'
import styles from './Connections.module.scss';


const Connections = (props) => {
    console.log("Render Connections...");
    return (
       <div className={styles.Connections}>
       <h1>Connections</h1>
       <p>{props.useCaseData.arduinoName}</p>
        <img alt="arduino" src={"/images/" + props.useCaseData.arduino} width="650px" aria-label={ props.useCaseData.arduino} />

       </div>
    );
};

// const mapStateToProps = state => {
//     return {
//         useCases: state.useCaseData.useCases,
//     }
// };



export default Connections;
