import React, { Component } from "react";
import Todos from "./Todos";
import AddTodos from "./AddTodos";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy something" },
      { id: 2, content: "buy nothing" },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center red-text">Todos!</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodos addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
