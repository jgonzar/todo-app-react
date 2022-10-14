import './App.css';
import React from "react";
import { TaskContext } from '../context';
import { TodoCounter } from '../components/TaskCounter/TaskCounter';
import { TodoSearch } from '../components/TaskSearch/TaskSearch';
import { TodoList } from '../components/TaskList/TaskList';
import { TodoItem } from '../components/TaskItem/TaskItem';
import { TaskForm } from '../components/TaskForm/TaskForm';
import { CreateTodoButton } from '../components/CreateTaskButton/CreateTaskButton';
import { Modal } from '../components/Modal/index';

function AppUI(){

    const {error, 
            loading, 
            searchedTasks, 
            completeTask, 
            deleteTask,
            openModal,
            setOpenModal
        } = React.useContext(TaskContext);

    return(
        <main className="main">
            <h1>
                GET IT 
                <br/>
                <span>DONE</span>
            </h1>
            <TodoCounter />
            <TodoSearch /> 
            <TodoList>
                {error && <p>Uh oh! There was an error...</p>}
                {loading && <p>Loading your tasks...</p>}
                {(!loading && !searchedTasks) && <p>Create new tasks!</p>}
                {searchedTasks.map(task => (
                    <TodoItem 
                    key={task.id} 
                    text={task.text} 
                    completed = {task.completed} 
                    onComplete={() => completeTask(task.text)}
                    onDelete={() => deleteTask(task.text)}
                    />
                ))}
            </TodoList>
            { !!openModal && (
                <Modal>
                    <TaskForm />
                </Modal>
            )}
            <CreateTodoButton
            setOpenModal={setOpenModal}
            />
        </main>
    )
}

export { AppUI};