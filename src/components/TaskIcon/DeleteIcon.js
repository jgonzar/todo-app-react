import React from "react";
import { TaskIcon } from './TaskIcon';

function DeleteIcon({onDelete}){
    return( 
        <TaskIcon 
            type="delete"
            onClick={onDelete}
        />
    );
};

export { DeleteIcon };