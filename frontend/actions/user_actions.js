import * as APIUtil from '../util/user_util';

export const RECEIVE_RECENT_ACTIVITIES = "RECEIVE_RECENT_ACTIVITIES";

export const receiveRecentActivity = recentActivities => ({
  type: RECEIVE_RECENT_ACTIVITIES,
  recentActivities
});

export const fetchRecentActivity = () => dispatch => {
  return APIUtil.fetchRecentActivity().then(recentActivities => {
    dispatch(receiveRecentActivity(recentActivities));
    console.log('test');
  });
};