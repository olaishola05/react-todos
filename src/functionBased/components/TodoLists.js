import React from 'react';
import TodoItem from './TodoItem';

const TodosLists = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodosProps={props.deleteTodosProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  );
};

export default TodosLists;
