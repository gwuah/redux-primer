import {createStore} from 'redux';
import todoApp from '../reducers';
import {addTodo, removeTodo} from '../actions';

const store = createStore(todoApp);

console.log(store.getState())

const unsuscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addTodo({
  id: 0,
  text: 'Hello World'
}))

store.dispatch(addTodo({
  id: 1,
  text: 'Checking'
}))

store.dispatch(addTodo({
  id: 2,
  text: 'Pompiido'
}))

store.dispatch(removeTodo(0))
store.dispatch(removeTodo(1))
store.dispatch(removeTodo(2))