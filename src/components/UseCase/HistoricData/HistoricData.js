import React from 'react'
import styles from './HistoricData.module.scss';
import HistoricTemperatures from "../../../containers/HistoricData/HistoricTemperatures";
import Charts from '../../../containers/Charts/HistoricCharts';

const HistoricData = (props) => {
    return (
       <div className={styles.HistoricData}>
       <h1>Historic Temperature Data</h1>
           <React.Fragment>
               <Charts />
               <HistoricTemperatures />
           </React.Fragment>
       </div>
    );
};

export default HistoricData;
