import React, { useState } from 'react';
// import logo from './logo.svg';

import TodoInput from './components/TodoInput';
import TodoList from './components/todoList';


function App() {
  
  return (
    <div>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
