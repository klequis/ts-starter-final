import * as React from "react"
import { connect } from "react-redux"
import { addTodo } from "../redux/todo/actions"
// import { Todo } from '../redux/todo/types'

export interface Props {
  addTodo: typeof addTodo
}

interface State {
  inputVal: string,
}

class BAddTodo extends React.Component<Props, State> {

  state = {
    inputVal: ''
  }

  updateInput = (inputVal: string) => {
    this.setState({ inputVal })
  }

  handleAddTodo = () => {
    const { inputVal } = this.state
    if (inputVal.length > 0) {
      this.props.addTodo(
        {
          _id: '1',
          content: 'hi',
          // completed: false
        }
      )
      this.setState({ inputVal: '' })
    }

  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.inputVal}
        />
        <button
          className="add-todo" onClick={this.handleAddTodo}
        >
          Add Todo
        </button>
      </div>
    )
  }
}

export default connect(
  null,
  { addTodo }
)(BAddTodo)
// export default AddTodo
