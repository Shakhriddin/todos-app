import React from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.scss';

const TodoList = ({todos, onDelete, onChangeStatus}) => {
  return (
    <div className="todo container">
      <ul className="todo__list">
        {
          todos.map((todo) => {
            return (
              <TodoListItem
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                onChangeStatus={onChangeStatus}
              />
            );
          })
        }
      </ul>
    </div>
  );
};

export default TodoList;
