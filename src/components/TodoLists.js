import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodosLists extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps} deleteTodosProps={this.props.deleteTodosProps} />
        ))}
      </ul>
    );
  }
}
