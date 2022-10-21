import './ChangeAlert.css'
import React from "react";
import { useStorageListener } from "./useStorageListener";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faRotateRight } from "@fortawesome/free-solid-svg-icons";

function ChangeAlert(sincronize){

    const {show, toggleShow} = useStorageListener(sincronize);

    if(show === true){
        return (
            <div className="alert-bg">
                <div className="alert-container">
                    <FontAwesomeIcon icon={faCircleExclamation} className="alert-icon" />
                    <p className="alert-text">Seems like your <span className="highlight-t">tasks</span><span className="highlight-h"> have changed</span>
                    <br/>
                    Would you like to update them?
                    </p>
                    <button
                        className="alert-btn"
                        onClick={() =>toggleShow(false)}
                    >
                        Update <FontAwesomeIcon icon={faRotateRight} />
                    </button>
                </div>
            </div>
        )
    }else{
        return null;
    }
};


export { ChangeAlert };