import React from 'react'
import styles from './Connections.module.scss';


const Connections = (props) => {
    return (
       <div className={styles.Connections}>
       <h1>Connections</h1>
       <p>Breadboard for "Thermometer - TMP36"</p>
        <img alt="arduino" src={"/images/" + props.useCaseData.arduino} />
       
       </div>
    );
};

// const mapStateToProps = state => {
//     return {
//         useCases: state.useCaseData.useCases,
//     }
// };



export default Connections;
