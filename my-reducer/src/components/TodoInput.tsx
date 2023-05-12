import React, { useState } from "react";
import { useDispatch } from "react-redux";
import '../../src/App.css';
// import { addTodo } from "../redux/action";
import { addTodos } from "../redux/reducer";

const TodoInput = () => {
    const [enteredValue,setValue] = useState<any>('');
    console.log({enteredValue});
    const dispatch = useDispatch();
    const handleSubmit =()=> {
      if(enteredValue !== ''){
        dispatch(addTodos(enteredValue));
        setValue('');
      }
    }
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
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default TodoInput;
