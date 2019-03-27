import {
  Todo,
  ADD_TODO,
  TOGGLE_TODO,
  TODOS_READ_REQUEST_KEY,
  TODOS_READ_KEY
} from './types'
import { createRequestThunk } from '../action-helpers'
import { ICreateRequestThunk } from '../action-helpers-types'
import api from '../../api'
// import { red } from '../../logger'

export function addTodo(todo: Todo) {
  console.log('action', todo);

  return {
    type: ADD_TODO,
    payload: todo,
  }
}

export function toggleMessage(completed: boolean) {
  return {
    type: TOGGLE_TODO,
    payload: completed,
  }
}

export const todosRead = (todos: Todo[]) => {
  // console.log('actions.todosRead: todos', todos);

  return ({
    type: TODOS_READ_KEY,
    payload: todos,
  })
}

// Read
const todoReadRequestCall: ICreateRequestThunk = {
  request: api.todos.read,
  key: TODOS_READ_REQUEST_KEY,
  success: [todosRead],
  failure: [(error) => console.log('(7) todoReadRequestCall: request failed', error)]
}

export const todosReadRequest = createRequestThunk(todoReadRequestCall)

