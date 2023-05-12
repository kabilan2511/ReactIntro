// import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducer'

// const rootReducer = combineReducers({reducer});

const store = configureStore({reducer: {
    todo: todoReducer
}});


export default store;