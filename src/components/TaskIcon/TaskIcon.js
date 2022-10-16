import './TaskIcon.css';
import React from "react";
import { ReactComponent as CheckSVG } from './check-solid.svg';
import { ReactComponent as DeleteSVG } from './x-solid.svg';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck, faX  } from '@fortawesome/free-solid-svg-icons';

const iconTypes = {
    "check": color => (
        <CheckSVG className="icon-svg icon-svg--check" fill={color}/>
    ),
    "delete": color =>(
        <DeleteSVG className="icon-svg icon-svg--delete" fill={color} />
    ),
};

function TaskIcon({type,color = 'gray',onClick}){

    return( 
        <span
        className={`icon-container icon-container--
        ${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TaskIcon };