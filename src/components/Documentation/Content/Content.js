import React from 'react'
import styles from './Content.module.scss';

const Content = (props) => {
    let data;
    let image;
    Object.keys(props.content).forEach(function(key){
        if(props.match.params.title === props.content[key].title){

            data = props.content[key];
        }
    });

    if(props.match.path === "/documentation"){
        data = props.content["Get Started"];
    }

    return(
        <div>
            <h1>{data.title}</h1>
            <p>{data.imageDesc}</p>
            <img className={styles.image} src={"/images/" + data.image} alt={data.image} width="600" height="300" />
            {
                data.text.map((paragraph) =>{
                return(
                    <p>{paragraph}</p>
                )
            })}
        </div>
    )
};

export default Content;
