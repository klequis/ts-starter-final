import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from "./reducers"
import thunk from 'redux-thunk'
import { todosReducer } from './todo/reducers'

const rootReducer = combineReducers({
  todosReducer,
})

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
