import {
  TodosState,
  ADD_TODO,
  TOGGLE_TODO,
  TodoActionTypes,
} from './types'

// import { mergeRight } from 'ramda'

const initialState: TodosState = {
  todos: []
}

export function todosReducer(
  state = initialState,
  action: TodoActionTypes
): TodosState {
  console.log('reducer: state', state);
  console.log('reducer: action', action);


  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
      }
    case TOGGLE_TODO:
      return state
      // return {
      //   todos: state.todos.filter(
      //     todo => todo.id === action.payload.id ? mergeRight(todo, { completed: true }) : todo
      //   )
      // }
    default:
      return state
  }
}