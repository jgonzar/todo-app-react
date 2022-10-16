import './TaskLoading.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircleXmark } from "@fortawesome/free-regular-svg-icons";

function TodoLoading(){
    return( 
        <div className="loadingTask-container">
            <span className="loadingTask-completeIcon">
                <FontAwesomeIcon icon={faCheckCircle} />
            </span>
            <p className="loadingTask-text">Loading...</p>
            <span className="loadingTask-deleteIcon">
                <FontAwesomeIcon icon={faCircleXmark} />
            </span>
        </div>
    );
}

export { TodoLoading };