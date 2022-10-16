import './TaskIcon.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX  } from '@fortawesome/free-solid-svg-icons';

function TodoIcon({type,color,onClick}){
    return( 
        <span
        className={`icon-container icon-container--
        ${type}`}
        onClick={onClick}
        >

        </span>
    );
}

export { TodoIcon };