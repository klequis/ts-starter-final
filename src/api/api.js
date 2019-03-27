import { fetchJson } from './api-helpers'

// eslint-disable-next-line
import { pink } from '../logger'

// Errors are handled by fetchJson()
export default {
  todos: {
    async read() {
      pink('(2) api.todos.read() called')
        const data = await fetchJson(
          '/api/todo',
          {
            method: 'GET',
          }
        )

        pink('(5) api.todos.read: data', data)
        return data.data
    },
  }
}