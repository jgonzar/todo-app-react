import './TaskItem.css';
import React from 'react';
import bullet from '../../assets/bullet.svg';
import { DeleteIcon } from '../TaskIcon/DeleteIcon';
import { CompleteIcon } from '../TaskIcon/CompleteIcon';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck, faX  } from '@fortawesome/free-solid-svg-icons';

function TodoItem(props){
    
    return(
        <li>
            <div id={props.key} className="li-content">
                <div className="li-left">
                    {/* <i onClick={props.onDelete}><FontAwesomeIcon icon={faX} /></i> */}
                    <DeleteIcon
                        onDelete={props.onDelete}
                    />
                    <img src={bullet} alt="bullet" />
                    <p className={`todo-item-p ${props.completed && 'todo-item-p--active'}`}>{props.text}</p>
                </div>
                {/* <i onClick={props.onComplete} className={`check-icon ${props.completed && 'check-icon--active'}`}><FontAwesomeIcon icon={faCheck} /></i> */}
                <CompleteIcon
                    completed={props.completed}
                    onComplete={props.onComplete}
                /> 
            </div>
            <span></span>
        </li>
    );
};

export { TodoItem };