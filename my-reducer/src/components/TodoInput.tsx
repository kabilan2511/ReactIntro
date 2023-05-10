import React, { useState } from "react";
import '../../src/App.css';

const TodoInput = () => {
    const [enteredValue,setValue] = useState('');
  return (
    <div className="todoInput">
      <h1>TODO</h1>
      <br />
      <input
        type='text'
        placeholder='Enter a text'
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={enteredValue}
      /> <br/>
      <button>Add</button>
    </div>
  );
};

export default TodoInput;
