import React, { useState ,useContext} from 'react';
import { TaskContext } from '../../context';

function TaskForm(){

    const [newTaskValue, setNewTaskValue] = useState('');

    const {
        addTask,
    } = useContext(TaskContext);

    const onCancel = () => {

    };

    const onChange = (event) => {
        setNewTaskValue(event.target.value); 
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTask();
    };



    return(
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea
            value={newTaskValue}
            onChange={onChange}
             placeholder="What do you need to get done?"/>
            <div>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
                <button type="submit">
                    Add Task
                </button>
            </div>
        </form>
    );
};

export { TaskForm };