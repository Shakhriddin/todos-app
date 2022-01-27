import React from 'react';
import './TodoListItem.scss';

const TodoListItem = ({todo, onDelete, onChangeStatus}) => {
  const {id, label, done} = todo;
  const className = `todo__list-item list-item ${done ? 'done' : ''}`;

  const handleDelete = (event) => {
    event.stopPropagation();
    onDelete(id);
  };
  return (
    <li
      className={className}
      onClick={() => onChangeStatus(id)}
    >
      <span className="list-item__checkbox"> </span>
      <span className="list-item__label">{label}</span>
      <button
        className="list-item__btn"
        onClick={handleDelete}
      >
        <span> &times;</span>
      </button>
    </li>
  );
};

export default TodoListItem;
