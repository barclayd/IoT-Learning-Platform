import React from 'react'
import styles from './Readings.module.scss';
import TemperatureData from '../../../containers/TemperatureData/TemperatureData';


const Readings = (props) => {
    return (
       <div className={styles.Information}>
           <React.Fragment>
               <TemperatureData />
           </React.Fragment>
       </div>
    );
};

export default Readings;
