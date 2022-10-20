import React from 'react';
import { useTasks } from './useTasks';
import { Header } from "../components/Header/Header";
import { TaskCounter } from "../components/TaskCounter/TaskCounter";
import { TaskSearch } from "../components/TaskSearch/TaskSearch";
import { TodoList } from '../components/TaskList/TaskList';
import { TodoItem } from '../components/TaskItem/TaskItem';
import { TaskForm } from '../components/TaskForm/TaskForm';
import { CreateTodoButton } from '../components/CreateTaskButton/CreateTaskButton';
import { Modal } from '../components/Modal/index';
import { TasksError } from '../components/TasksError/TasksError';
import { TasksLoading } from '../components/TasksLoading/TasksLoading';
import { EmptyTasks } from '../components/EmptyTasks/EmptyTasks';
import { EmptySearchResults } from '../components/EmptySearchResults/EmptySearchResults';

function App() {
    const {error, 
      loading, 
      searchedTasks, 
      completeTask, 
      deleteTask,
      openModal,
      setOpenModal,
      totalTasks, 
      completedTasks,
      searchValue, 
      setSearchValue,
      addTask,
      newTaskValue, 
      setNewTaskValue
  } = useTasks();

return(
    <main className="main">
        <h1>
            GET IT 
            <br/>
            <span>DONE</span>
        </h1>
        <Header loading={loading} >
            <TaskCounter
                totalTasks = {totalTasks}
                completedTasks = {completedTasks}
                // loading={loading}
            />
            <TaskSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                // loading={loading}   
            /> 
        </Header>

        <TodoList
          totalTasks={totalTasks}
          searchValue={searchValue}
          error={error}
          loading={loading}
          searchedTasks={searchedTasks}
          onError={() => <TasksError />}
          onLoading={() => <TasksLoading />}
          onEmpty={() => <EmptyTasks />}
          onEmptySearchResults={() => <EmptySearchResults searchValue={searchValue} />}
        //   render =
        >
            {task => (
            <TodoItem 
                key={task.id} 
                text={task.text} 
                completed = {task.completed} 
                onComplete={() => completeTask(task.text)}
                onDelete={() => deleteTask(task.text)}
            />
            )}
        </TodoList>
        { !!openModal && (
            <Modal>
                <TaskForm
                  addTask={addTask}
                  newTaskValue={newTaskValue}
                  setNewTaskValue={setNewTaskValue}
                  setOpenModal={setOpenModal}
                />
            </Modal>
        )} 
        <CreateTodoButton
            openModal={openModal}  
            setOpenModal={setOpenModal}
        />
    </main>
  );
};

export default App;
