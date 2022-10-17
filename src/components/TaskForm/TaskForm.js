import './TaskForm.css';
import React, { useState ,useContext} from 'react';
import { TaskContext } from '../../context';

function TaskForm(props){

    const [newTaskValue, setNewTaskValue] = useState('');

    const {
        addTask,
    } = useContext(TaskContext);

    const onCancel = () => {
        props.onToggle();
    };

    const onChange = (event) => {
        setNewTaskValue(event.target.value); 
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTask(newTaskValue);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Add a new task</label>
            <textarea
            value={newTaskValue}
            onChange={onChange}
             placeholder="What do you need to get done?"/>
            <div className="btn-container">
                <button type="button" onClick={onCancel}>
                    Close
                </button>
                <button type="submit">
                    Add Task
                </button>
            </div>
        </form>
    );
};

export { TaskForm };