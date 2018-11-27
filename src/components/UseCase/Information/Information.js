import React from 'react'
import styles from './Information.module.scss';


const Information = (props) => {
    
    return (
       <div className={styles.Information}>
       <h1>Information</h1>
        <p>{props.useCaseData.shortDesc}</p>
        <p>{props.useCaseData.longDesc}</p>
       </div>
    );
};

export default Information;
