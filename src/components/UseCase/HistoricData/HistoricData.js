import React from 'react'
import styles from './HistoricData.module.scss';
import HistoricTemperatures from "../../../containers/HistoricData/HistoricTemperatures";


const HistoricData = (props) => {
    return (
       <div className={styles.HistoricData}>
       <h1>Historic Temperature Data</h1>
           <div>
               <HistoricTemperatures />
           </div>
       </div>
    );
};

export default HistoricData;
