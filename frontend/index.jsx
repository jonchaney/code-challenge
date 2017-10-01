import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

import { fetchRecentActivities } from "./actions/user_actions.js";

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});