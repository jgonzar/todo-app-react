import './TaskCounter.css';
import React from "react";
import { TaskContext } from '../../context';

function TodoCounter(){ 

  const {totalTasks, completedTasks} = React.useContext(TaskContext)

    return (
      <h2>You have completed<br/><span className="highlight">{completedTasks}</span> of <span className="highlight">{totalTasks}</span> tasks</h2>
    );
}

export { TodoCounter };