import {combineReducers} from "redux";
import actionTypes from '../actionTypes';

function todos(state=[], action) {
  switch (action.type) {
    case actionTypes.ADD_TODO :
      return [...state, action.todo]
    case actionTypes.REMOVE_TODO :
      const indexOfElement = state.findIndex(todo => todo.index === action.index);
      return [
        ...state.slice(0, indexOfElement), 
        ...state.slice(indexOfElement+1)
      ]
    default : return state
  }
}

export default combineReducers({
  todos
})