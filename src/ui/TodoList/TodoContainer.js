import * as React from "react"
import { connect } from "react-redux"
import { todosReadRequest } from '../../redux/actions/actions'
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

class TodoContainer extends React.Component {
  componentDidMount() {
    console.log('did mount');

    todosReadRequest()
  }

  render() {

    return (
      <div>
        <TodoList todos={this.props.todos} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const todos = getAllTodos(state)
  return {
    todos
  }
}

export default connect(mapStateToProps, todosReadRequest)(TodoContainer)
