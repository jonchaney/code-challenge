import { combineReducers } from 'redux';

import RecentActivitiesReducer from './recentActivitiesReducer';

const RootReducer = combineReducers({
  recentActivities: RecentActivitiesReducer
});

export default RootReducer;
