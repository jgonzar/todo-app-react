import './TaskForm.css';
import React, {useState} from 'react';
// import { useTasks } from '../../App/useTasks';


function TaskForm({addTask, setOpenModal}){

    const [newTaskValue, setNewTaskValue] = useState('');

    // const {
    //     addTask,
    // } = useTasks();

    const onCancel = () => {
        setOpenModal(false);
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