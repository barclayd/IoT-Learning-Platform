import React from 'react'

const Content = (props) => {
    let data;
    Object.keys(props.content).forEach(function(key){
        if(props.match.params.title === key){
            
            data = props.content[key];
        }
    })

    if(props.match.path === "/documentation"){
        data = props.content["Get Started"];

    }
    
    return(
        <div>
            <h1>{data.title}</h1>
            {data.text.map((paragraph) =>{
                return(
                    <p>{paragraph}</p>
                )
            })}
        </div>
    )
}

export default Content;