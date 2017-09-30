import merge from 'lodash/merge';

import {
  RECEIVE_RECENT_ACTIVITIES,
} from '../actions/user_actions';

const defaultState = {
  recentActivities: {
    "nodeType": 17,
    "nodeTypeString": "Comment",
    "nodeid": 12324,
    "title": "Re: What is for dinner?",
    "postDate": 1505832130561,
    "author": "Tony Handy",
    "authorId": 1,
    "authorAvatar": "images/avatar1465389809397.png"
  }
};

const AlbumsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_RECENT_ACTIVITIES:
      return merge({}, state, { recentActivities: action.recentActivities });
    default:
      return state;
  }
};

export default AlbumsReducer;
