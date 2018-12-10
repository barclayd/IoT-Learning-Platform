import React from 'react';
import AddNewUseCase from '../../AddNewUseCase/AddNewUseCase';



const NewUseCase = (props) => {

    return (
        <React.Fragment>
            <div style={{marginTop: '-100px', marginLeft: '150px'}}>
            <AddNewUseCase id={props.useCases.length} users={props.users} sensors={props.sensors}/>
            </div>
        </React.Fragment>);
};



export default NewUseCase;
