import React from 'react'
import styles from './Readings.module.scss';
import TemperatureData from '../../../containers/TemperatureData/TemperatureData';
import {Icon, Tooltip} from "antd";
import * as text from "../../../assets/staticText";


const Readings = (props) => {
    const questionMarkStyle = {position: 'absolute', fontSize: '30px', right: '30px', top: '20px'};


    return (
       <div className={styles.Information}>
           <React.Fragment>
               {/*<Tooltip title={(localStorage.getItem("email") !== null) ? text.toolbarLoggedIn : text.toolbarLoggedOut} placement="bottom">*/}
                   {/*<Icon type="question-circle" theme="filled" style={questionMarkStyle} defaultVisible={true}/>*/}
               {/*</Tooltip>*/}
               <TemperatureData ID={props.match.params.id}/>
           </React.Fragment>
       </div>
    );
};

export default Readings;
