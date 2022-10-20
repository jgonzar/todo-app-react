import './ChangeAlert.css'
import React from "react";
import { withStorageListener } from "./withStorageListener";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faRotateRight } from "@fortawesome/free-solid-svg-icons";

function ChangeAlert({show, toggleShow}){
    if(show === true){
        return (
            <div className="alert-container">
                <FontAwesomeIcon icon={faCircleExclamation} className="alert-icon" />
                <p className="alert-text">Seems like your <span className="highlight-t">tasks</span><span className="highlight-h"> have changed</span></p>
                <button
                    className="alert-btn"
                    onClick={() =>toggleShow(false)}
                >
                    <FontAwesomeIcon icon={faRotateRight} />
                </button>
            </div>
        )
    }else{
        return null;
    }
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };