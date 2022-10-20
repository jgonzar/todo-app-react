import './CreateTaskButton.css';
import React from 'react';

function CreateTodoButton({openModal, setOpenModal}){

    // const [ toggle, setToggle ] = useState(false);

    const onClickBtn = () =>{
        setOpenModal(true);
        // setToggle(prevState => !prevState);
    };
    
    return(
        <button 
        className={`${openModal ? true && "addTaskBtn btnToggle" : 'addTaskBtn'}`}
        onClick = {onClickBtn}
        // toggle = {toggle}
        >
            <p>+</p> 
        </button>
    );
};

export { CreateTodoButton };