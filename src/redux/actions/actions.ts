import api from '../../api'
import { createRequestThunk } from './action-helpers'

import { red } from '../../logger'

let nextTodoId = 0;

export const ADD_TODO = "ADD_TODO";
export const addTodo = (content: string) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const TOGGLE_TODO = "TOGGLE_TODO";
export const toggleTodo = (id: string) => ({
  type: TOGGLE_TODO,
  payload: { id }
});

// Read
export const todosReadKey = 'todosReadKey'
export const todosReadRequestKey = 'todosReadRequestKey'

export const todosRead = (todos: []) => {
  console.log('todos', todos);

  return ({
    type: todosReadKey,
    payload: { todos },
  })
}

export const todosReadRequest = createRequestThunk({
  request: api.todos.read,
  key: todosReadRequestKey,
  success: [todosRead],
  failure: [(error: string) => red('request failed', error)]
})

