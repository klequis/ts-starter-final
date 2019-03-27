import {
  TodosState,
  ADD_TODO,
  TOGGLE_TODO,
  TodoActionTypes,
  TODOS_READ_KEY
} from './types'

// import { mergeRight } from 'ramda'
import { blue } from '../../logger'

const initialState: TodosState = {
  todos: []
}

export function todosReducer(
  state = initialState,
  action: TodoActionTypes
): TodosState {

  // console.log('reducer: state', state);
  // console.log('reducer: action', action);
  // console.log('reducers.todosReducer: action', action)
  switch (action.type) {
    case TODOS_READ_KEY:
      blue('todosReducer: action', action)
      return action.payload
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