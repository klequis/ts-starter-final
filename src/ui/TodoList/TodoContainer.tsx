import * as React from "react"
// import { connect } from "react-redux"
// import { todosReadRequest } from '../../redux/actions/actions'
// import { AppState } from '../../redux'
import TodoList from './TodoList'


// const TodoContainer = ({ todos }) => (
//   <ul className="todo-list">
//     {todos && todos.length
//       ? todos.map((todo, index) => {
//           return <Todo key={`todo-${todo.id}`} todo={todo} />
//         })
//       : "No todos, yay!"}
//   </ul>
// )


const todos = [
  { id: '1', content: 'one', completed: false }
]

class TodoContainer extends React.Component {
  // componentDidMount() {
  //   console.log('did mount');

  //   todosReadRequest()
  // }

  render() {

    return (
      <div>
        {/* <TodoList todos={this.props.todos} /> */}
        <TodoList todos={todos} />
      </div>
    )
  }
}

// const mapStateToProps = (state: AppState) => {
//   const todos = getAllTodos(state)
//   return {
//     todos
//   }
// }

// export default connect(mapStateToProps, todosReadRequest)(TodoContainer)

export default TodoContainer