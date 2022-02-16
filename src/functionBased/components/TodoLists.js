/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosLists = ({ todos, handleChangeProps, deleteTodosProps, setUpdate }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={handleChangeProps}
        deleteTodosProps={deleteTodosProps}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

TodosLists.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
  deleteTodosProps: PropTypes.func.isRequired,
};

export default TodosLists;
