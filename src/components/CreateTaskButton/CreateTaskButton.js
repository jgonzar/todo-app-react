import './CreateTaskButton.css';
import React, {useState} from 'react';

function CreateTodoButton(props){

    // const [ toggle, setToggle ] = useState(false);

    const onClickBtn = () =>{
        props.onToggle();
        // setToggle(prevState => !prevState);
    };
    
    return(
        <button 
        className={`${props.openModal ? true && "addTaskBtn btnToggle" : 'addTaskBtn'}`}
        onClick = {onClickBtn}
        // toggle = {toggle}
        >
            <p>+</p> 
        </button>
    );
};

export { CreateTodoButton };