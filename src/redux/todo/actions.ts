import { Todo, ADD_TODO, TOGGLE_TODO } from './types'

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