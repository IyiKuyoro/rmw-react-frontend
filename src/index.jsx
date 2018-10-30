import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { saveUser } from '../src/store/actions/auth';

import App from './app';

if (localStorage.user) {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    store.dispatch(saveUser(user));
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
