import './EmptyTasks.css';
import React from "react";

function EmptyTasks(){
    return( 
        <p className="empty-text">You have not created any tasks yet</p>
    );
};

export { EmptyTasks };