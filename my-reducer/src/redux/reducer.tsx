import { create } from 'domain';
import * as actions from './actionType'
import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name : 'todo',
  initialState: {
    todos: []
  },
  reducers: {
    addTodos : (state: any,action: any) => {
      state.todos.push({
        id: Math.random().toString(36).substr(2, 5),
        todo: action.payload,
      })
    },
    deleteTodos: (state:any, actions: any) => {
      state.todos = state.todos.filter((i : any)=> i.id !== actions.payload.id);
    }
  },
},
)

export const {addTodos, deleteTodos} = todoSlice.actions;
export default todoSlice.reducer;