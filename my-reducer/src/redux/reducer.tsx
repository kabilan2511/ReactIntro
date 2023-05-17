import { create } from 'domain';
import * as actions from './actionType'
import { createSlice } from '@reduxjs/toolkit';


type Todos = {
  todos: any;
}

const initialState : Todos = {
  todos: []
}

let count = 0;

export const todoSlice = createSlice({
  name : 'todo',
  initialState,
  reducers: {
    addTodos : (state : Todos,action: any) => {
      state.todos.push({
        id: count++,
        todo: action.payload,
      });
      console.log('stateadd',state,action)
    },
    deleteTodos: (state:any, actions: any) => {
      state.todos = state.todos.filter((i : any)=> i.id !== actions.payload.id);
      console.log({state});
      console.log({actions});
    }
  },
},
)

export const {addTodos, deleteTodos} = todoSlice.actions;
export default todoSlice.reducer;