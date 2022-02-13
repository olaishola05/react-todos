import React, { Component } from 'react';
import styles from './TodoItem.module.css';

export class TodoItem extends Component {
  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const { completed, id, title } = this.props.todo;

    return (
      <li className={styles.item}>
        <input type="checkbox" checked={completed} onChange={() => this.props.handleChangeProps(id)} className={styles.checkbox} />
        <button onClick={() => this.props.deleteTodosProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}></span>
        {title}
      </li>
    );
  }
}

export default TodoItem;
