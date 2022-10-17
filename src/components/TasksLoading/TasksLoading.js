import './TasksLoading.css';
import React from "react";

function TasksLoading(){
    return( 
        <div className="loadingTask-container">
            <p className="loadingTask-text">Loading...</p>     
        </div>
    );
}

export { TasksLoading };