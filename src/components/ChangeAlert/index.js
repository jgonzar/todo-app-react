import './ChangeAlert.css'
import React from "react";
import { withStorageListener } from "./withStorageListener";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faRotateRight } from "@fortawesome/free-solid-svg-icons";

function ChangeAlert({show, toggleShow}){
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };