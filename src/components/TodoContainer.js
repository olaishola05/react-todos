import React, { Component } from 'react';
import Header from './Header';
import TodosLists from './TodoLists';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';

export class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: uuidv4(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodoItem = (title) => {
    const newItem = {
      id: uuidv4(),
      title: title,
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newItem],
    });
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodosProps={this.addTodoItem} />
          <TodosLists todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodosProps={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
