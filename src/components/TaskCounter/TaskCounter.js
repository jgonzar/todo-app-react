import './TaskCounter.css';
import React from "react";
import { TaskContext } from '../../context';

function TodoCounter(){ 
  const {totalTasks, completedTasks} = React.useContext(TaskContext)
    return (
      <h2>You have completed {completedTasks} of {totalTasks} tasks</h2>
    );
}

export { TodoCounter };