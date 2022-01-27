import React from 'react';
import MyInput from '../UI/Input/MyInput';
import './TodoFilter.scss';

const TodoFilter = ({filter, setFilter}) => {

  const btns = ['all', 'active', 'completed']
    .map(btn => (
      <button
        key={btn}
        className={`todo-filter__btn ${filter.status === btn ? 'active' : ''}`}
        type="button"
        onClick={(e) => setFilter({
          ...filter,
          status: e.target.textContent.toLowerCase()
        })}
      >
        {btn}
      </button>
    ));

  return (
    <div className="todo-filter container">
      <div className="todo-filter__input">
        <MyInput
          value={filter.query}
          type="text"
          spellCheck="false"
          placeholder="Search ..."
          onChange={(e) => setFilter({...filter, query: e.target.value})}
        />
      </div>
      <div className="todo-filter__btns">
        {btns}
      </div>
    </div>
  );
};

export default TodoFilter;
