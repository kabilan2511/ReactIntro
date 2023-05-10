import { combineReducers } from "redux";
import { createStore } from "redux";
import reducer from './reducer'

const rootReducer = combineReducers({reducer});

const store = createStore(rootReducer);


export default store;