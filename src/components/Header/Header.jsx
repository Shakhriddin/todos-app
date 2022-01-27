import React from 'react';
import './Header.scss';
import {clearStorage} from '../../utils/storage';
import {changePageTitle} from '../../utils/changePageTitle';

const Header = ({userName, count, setIsAuth, setTodos}) => {

  const handleSignOut = () => {
    setIsAuth(false);
    setTodos([{
      id: 1,
      label: 'What needs to be done',
      done: false,
    }]);
    clearStorage();
    changePageTitle('');
  };

  return (
    <header className="header container">
      <div className="header__user">
        <h2 className="header__user-name">
          Hi <span>{userName}</span> 👋
        </h2>
        <p className="header__user-info">
          <span>{count.todo} more to do,</span>
          <span>{count.done} done.</span>
        </p>
      </div>
      <button
        className="header__btn"
        type="button"
        onClick={handleSignOut}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          viewBox="0 0 512 512"
        >
          <g>
            <path
              fill="rgba(161, 71, 236, .2)"
              d="M64 160v192a32 32 0 0 0 32 32h84a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12H96a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h84a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12H96a32 32 0 0 0-32 32z">
            </path>
            <path
              fill="rgba(161, 71, 236, .6)"
              d="M288 424v-96H152a23.94 23.94 0 0 1-24-24v-96a23.94 23.94 0 0 1 24-24h136V88c0-21.4 25.9-32 41-17l168 168a24.2 24.2 0 0 1 0 34L329 441c-15 15-41 4.52-41-17z">
            </path>
          </g>
        </svg>
      </button>
    </header>
  );
};

export default Header;
