import React from 'react'

class App extends React.Component {
  state = {
    todos: [
      {description: 'buy apples', isDone: false},
      {description: 'learn react', isDone: true},
      {description: 'watch movie', isDone: false}
    ],
    newTodoDescription:"",

  }

  handleOnChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value,
    })
  }

  handleTodoClick = currentTodo => {
    currentTodo.isDone = !currentTodo.isDone

    const updatedState = {
      todos: this.state.todos
    }
    this.setState(updatedState)
  }

  handleAddTodo = () => {
    //get new todo description
    const newTodoDescription = this.state.newTodoDescription
    //creat new todo object from the decription
    const newTodo = {
      description: newTodoDescription,
      isDone: false,
    };
    //update react component state
    const newTodos = [
      ...this.state.todos,
      newTodo,
    ];

    this.setState ({
      todos: newTodos,
    });
  }

  render() {
    return <div>
      <h1>My wonderful todo list</h1>
      <lable htmlFor="newTodoDescription">Add Todo</lable>
      <input 
        type="text" 
        value={this.state.newTodoDescription} 
        name="newTodoDescription"
        id="newTodoDescription"
        onChange={this.handleOnChange}
      />
      <button onClick={this.handleAddTodo}>+</button>
      <ul>
        {this.state.todos.map(todo => {
          let completeClass = ''
          if (todo.isDone) {
            completeClass = 'complete'
          }
          return (
            <li
              className={completeClass}
              onClick={() => this.handleTodoClick(todo)}>
              {todo.description}
            </li>
          )
        })}
      </ul>
    </div>
  }
}

export default App
