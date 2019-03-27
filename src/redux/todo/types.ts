export interface Todo {
  _id: string,
  content: string,
  completed?: boolean,
}

export interface TodosState {
  todos: Todo[]
}

export const ADD_TODO = 'ADD_TODO'

interface AddTodoAction {
  type: typeof ADD_TODO
  payload: Todo
}

export const TOGGLE_TODO = 'TOGGLE_TODO'

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO,
  payload: boolean
}

export const TODOS_READ_KEY = 'TODOS_READ_KEY'

interface TodosReadAction {
  type: typeof TODOS_READ_KEY
  payload: TodosState
}

export const TODOS_READ_REQUEST_KEY = 'TODOS_READ_REQUEST_KEY'




export type TodoActionTypes =  AddTodoAction | ToggleTodoAction | TodosReadAction
