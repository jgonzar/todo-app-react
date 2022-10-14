import './CreateTaskButton.css';
import React from 'react';

function CreateTodoButton(props){

    const onClickBtn = () =>{
        props.setOpenModal(prevState => !prevState);
    };
    
    return(
        <button 
        className="addTaskBtn"
        onClick = {onClickBtn}
        >
            <p>+</p> 
        </button>
    );
};

export { CreateTodoButton };