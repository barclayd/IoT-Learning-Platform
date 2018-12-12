import React from 'react'
import {Redirect} from "react-router-dom";
import styles from './Information.module.scss';
import {Icon, Tooltip} from "antd";
import * as text from "../../../assets/staticText";


const Information = (props) => {

    const questionMarkStyle = {position: 'absolute', fontSize: '30px', right: '30px', top: '20px'};

    let content;
    let redirect;
    if(props.useCaseData !== undefined) {
        content =
            <React.Fragment>
                <h1>Information</h1>
                <Tooltip title={text.information} placement="bottom">
                    <Icon type="question-circle" theme="filled" style={questionMarkStyle}/>
                </Tooltip>
                <p>{props.useCaseData.shortDesc}</p>
                <p>{props.useCaseData.longDesc}</p>
        </React.Fragment>
    } else {
        redirect = <Redirect to='/dashboard'/>
    }

    return (
       <div className={styles.Information}>
           {redirect}
           {content}
       </div>
    );
};

export default Information;
