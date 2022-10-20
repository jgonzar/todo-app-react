import './TaskCounter.css';
import React from "react";

function TaskCounter({totalTasks, completedTasks, loading}){ 
    return (
      <h2 
      className={`taskCounter ${!!loading && 'taskCounter--loading'}`}>
        You have completed 
        <br/> 
        <span className="highlight">{completedTasks}</span> of <span className="highlight">{totalTasks}</span> tasks
      </h2>
    );
}

export { TaskCounter };