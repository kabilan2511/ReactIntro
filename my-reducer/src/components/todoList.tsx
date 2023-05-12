import React from 'react'
import '../../src/App.css';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteTodos } from '../redux/reducer';


interface RootState {
    id: string;
    todo: any
}
   
const TodoList = () => {
    const  {todos}  = useSelector((state:any)=> state.todo);
    // const dispatch = useDispatch();

    console.log({todos});

 return (
    <div className='todoList'>
        <h1>Added Items</h1>
        {todos.length === 0 ? (
            <div> Empty</div>
        ): (
            todos.map((i : any)=> 
            <div> {i.todo}</div>
            
            )
        )}
    </div>
 )
}

export default TodoList;