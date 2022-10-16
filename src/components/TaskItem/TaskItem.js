import './TaskItem.css';
import React from 'react';
import bullet from '../../assets/bullet.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX  } from '@fortawesome/free-solid-svg-icons';

function TodoItem(props){

    return(
        <li>
            <div className="li-content">
                <div className="li-left">
                    <i onClick={props.onDelete}><FontAwesomeIcon icon={faX} /></i>
                    <img src={bullet} alt="bullet" />
                    <p className={`todo-item-p ${props.completed && 'todo-item-p--active'}`}>{props.text}</p>
                </div>
                <i onClick={props.onComplete} className={`check-icon ${props.completed && 'check-icon--active'}`}><FontAwesomeIcon icon={faCheck} /></i>
            </div>
            <span></span>
        </li>
    );
};

export { TodoItem };