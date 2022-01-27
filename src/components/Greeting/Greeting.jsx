import React, {useState} from 'react';
import './Greeting.scss';
import {storage} from '../../utils/storage';
import {changePageTitle} from '../../utils/changePageTitle';

const Greeting = ({setIsAuth, setUserName}) => {
  const [inputValue, setInputValue] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length > 0) {
      setIsAuth(true);
      setUserName(inputValue);
      storage('user', {
        isAuth: true,
        userName: inputValue
      });
      changePageTitle(inputValue);
    }
    event.target.reset();
  };
  const inputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="greeting">
      <h1 className="greeting__title">Todos App</h1>
      <h2 className="greeting__subtitle">
        Boost your productivity <br/>
        by planning your day!
      </h2>
      <form
        className="greeting__form"
        action="#"
        onSubmit={handleSubmit}
      >
        <div className="greeting__form-item">
          <input
            className="greeting__form-input"
            type="text"
            spellCheck="false"
            required={true}
            value={inputValue}
            onChange={inputChange}
            id="name"
            name="name"
          />
          <label
            className="greeting__form-label"
            htmlFor="name"
          >
            Enter your name...
          </label>
        </div>
        <button
          type="submit"
          className="greeting__form-btn"
        >
          Let's start
        </button>
      </form>
    </div>
  );
};

export default Greeting;
