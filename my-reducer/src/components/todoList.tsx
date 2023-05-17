import React from 'react'
import '../../src/App.css';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteTodos } from '../redux/reducer';


const TodoList = () => {
  const { todos } = useSelector((state: any) => state.todo);
  const dispatch = useDispatch();

  console.log({ todos });

  return (
    <>
      <div className='todoList'>
        <h1>Added Items</h1>
        {todos.length === 0 ? (
          <div> Empty</div>
        ) : (
          todos.map((i: any) => (
            <div className='aligned'>
              <div className='textt'> 
              <ins title={i.todo}>{i.todo}</ins>
              </div>
              <button
                className='button'
                onClick={() => dispatch(deleteTodos(i))}
              >
                X
              </button>
              <br />
            </div>
          ))
        )}
      </div>
      <hr />
    </>
  );
};

export default TodoList;