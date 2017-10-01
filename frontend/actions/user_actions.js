import { recentActivities } from '../util/user_util.js';

export const RECEIVE_RECENT_ACTIVITIES = "RECEIVE_RECENT_ACTIVITIES";

// actions creators

export const receiveRecentActivity = recentActivities => ({
  type: RECEIVE_RECENT_ACTIVITIES,
  recentActivities
});

// thunk action creators

export const fetchRecentActivities = () => dispatch => {
  dispatch(receiveRecentActivity(recentActivities));
};
