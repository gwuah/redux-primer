import actionTypes from '../actionTypes';

export function addTodo(todo) {
  return {
    type: actionTypes.ADD_TODO,
    todo
  }
}

export function removeTodo(id) {
  return {
    type: actionTypes.REMOVE_TODO,
    id: id
  }
}