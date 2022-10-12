import './App.css';
import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';


const todos = [
  { id:1, text: 'Estudiar', completed: false},
  { id:2, text: 'Estudiar mas', completed: false},
  { id:3, text:'Estudiar mas mas', completed:false}
];

function App() {
  return (
    <main className="main">
      <h1>
        GET IT 
        <br/>
        <span>DONE</span>
      </h1>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.id} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </main>
  );
}

export default App;
