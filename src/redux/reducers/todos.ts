import {
  todosReadKey,
} from "../actions/actions"
import {
  Action,
  StoreState
} from '../../types/index'

import { append } from 'ramda'


export default function(state: StoreState[] = [], { type, payload }: Action ) {
  // console.log('state', state)

  switch (type) {
    case todosReadKey:
      return append(payload.todos, state)
    default:
      return state
  }

}
