import * as actions from './actionType'

const initialState = {
    // todo:[],
    // completed: [],
    counter: 0,
    list: [{ id: 0, text: "Happy Hacking ~v~", completed: false }]
}

const reducer = (state= initialState, action:any) => {
    switch (action.type) {
      case actions.ADD_TODO:
        return {
          counter: state.counter + 1,
          list: [
            ...state.list,
            { id: state.counter + 1, text: action.text, completed: false },
          ],
        };
      case actions.REMOVE_TODO:
        return {
          ...state,
          list: state.list.filter((item) => item.id !== action.id),
        };

      case actions.CLEAR_TODO:
        return {initialState}
      default:
        return state;
    }
};

export default reducer;