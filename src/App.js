import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos:[
      {id:1, content: 'studying react'},
      {id:2, content: 'watching dark'}
    ]
  }

  deleteItem = (id) => {
      const todos = this.state.todos.filter (todo => {
        return todo.id !== id
      });
      this.setState({
        todos
      })
  }

  addTodo = (todo) => {
    todo.id=Math.random()*10;
    let todos = [...this.state.todos,todo]
    this.setState({
      todos
    })
  }
  render() {
    return (
     <div className="todo-app container">
     <h1 className="center blue-text">Todo's List</h1>
        <Todos todos={this.state.todos} deleteItem={this.deleteItem}/>
        <AddTodo addTodo={this.addTodo}/>
     </div>
    )
  }
}

export default App;
