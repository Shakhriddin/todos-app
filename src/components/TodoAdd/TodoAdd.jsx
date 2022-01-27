import React from 'react';
import './TodoAdd.scss';
import MyInput from '../UI/Input/MyInput';
import useInput from '../../hooks/useInput';

const TodoAdd = ({onAdd}) => {
  const {value, setValue, onChange} = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.length > 0) {
      onAdd(value);
      setValue('');
    }
  };
  return (
    <div className="todo-add container">
      <form
        action="#"
        className="todo-add__form"
        onSubmit={handleSubmit}
      >
        <div className="todo-add__input">
          <MyInput
            value={value}
            type="text"
            spellCheck="false"
            placeholder="I want to..."
            onChange={onChange}
          />
        </div>
        <button
          className="todo-add__btn"
          type="submit"
        >
          Add new +
        </button>
      </form>

    </div>
  );
};

export default TodoAdd;
