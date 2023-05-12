import * as actions from './actionType'

export const addTodo = (text:string)=> {
    console.log({text})
    return {
        type: actions.ADD_TODO,
        text
    };
};

export const removeTodo = (id : any) => {
    return {
        type: actions.REMOVE_TODO,
        payload: id
    };
};

export const clearTodo = (payload:any)=> {
    return {
        type: actions.CLEAR_TODO,
        payload,
    };
};

export const toggleTodo = (id: any) => {
    return {
        type:actions.TOGGLE_TODO,
        payload:id
    };
};