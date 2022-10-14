import React from 'react';
import { TaskProvider } from '../context';
import { AppUI } from './AppUI';

// const defaultTasks = [
//   { id:1, text: 'Study', completed: false},
//   { id:2, text: 'Take a walk', completed: false},
//   { id:3, text:'Workout', completed:false},
//   { id:4, text:'Cook meal', completed:false},
//   { id:5, text:'Learn React', completed:false},
// ];

function App() {
  return (
    <TaskProvider>
      <AppUI />
    </TaskProvider>
  );
}

export default App;
