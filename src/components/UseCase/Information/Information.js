import React from 'react'
import {Redirect} from "react-router-dom";
import styles from './Information.module.scss';


const Information = (props) => {

    let content;
    let redirect;
    if(props.useCaseData !== undefined) {
        content =
            <React.Fragment>
                <h1>Information</h1>
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
