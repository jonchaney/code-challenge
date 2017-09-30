import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

import recentActivities from "./util/user_util.js";
import fetchRecentActivities from "./util/user_util.js";

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  // test
  window.fetchRecentActivities = fetchRecentActivities;
  // end test

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  console.log(recentActivities);
});