import merge from 'lodash/merge';

import {
  RECEIVE_RECENT_ACTIVITIES,
} from '../actions/user_actions';

const defaultState = {
    "nodeType": null,
    "nodeTypeString": null,
    "nodeid": null,
    "title": null,
    "postDate": null,
    "author": null,
    "authorId": null,
    "authorAvatar": null
  };

const RecentActivitiesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = action.recentActivities;
  switch (action.type) {
    case RECEIVE_RECENT_ACTIVITIES:
      return newState.recentActivities;
    default:
      return state;
  }
};

export default RecentActivitiesReducer;