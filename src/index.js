import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './components/App';
import {storage} from './utils/storage';
import {changePageTitle} from './utils/changePageTitle';


if (storage('user')) {
  changePageTitle(storage('user').userName);
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
