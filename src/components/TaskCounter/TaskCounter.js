import './TaskCounter.css';
import React from "react";

function TaskCounter({totalTasks, completedTasks}){ 

    return (
      <h2>You have completed<br/><span className="highlight">{completedTasks}</span> of <span className="highlight">{totalTasks}</span> tasks</h2>
    );
}

export { TaskCounter };