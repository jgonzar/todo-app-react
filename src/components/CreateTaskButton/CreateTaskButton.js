import './CreateTaskButton.css';
import React, {useState} from 'react';

function CreateTodoButton(props){

    const [ toggle, setToggle ] = useState(false);

    const onClickBtn = () =>{
        props.setOpenModal(prevState => !prevState);
        setToggle(prevState => !prevState);
    };
    
    return(
        <button 
        className={`${toggle ? true && "addTaskBtn btnToggle" : 'addTaskBtn'}`}
        onClick = {onClickBtn}
        // toggle = {toggle}
        >
            <p>+</p> 
        </button>
    );
};

export { CreateTodoButton };