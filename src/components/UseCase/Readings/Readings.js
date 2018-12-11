import React from 'react'
import styles from './Readings.module.scss';
import TemperatureData from '../../../containers/TemperatureData/TemperatureData';


const Readings = (props) => {
    const questionMarkStyle = {position: 'absolute', fontSize: '30px', right: '30px', top: '20px'};


    return (
       <div className={styles.Information}>
           <React.Fragment>
               <TemperatureData ID={props.match.params.id}/>
           </React.Fragment>
       </div>
    );
};

export default Readings;
