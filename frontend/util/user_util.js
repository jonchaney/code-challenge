const recentActivities = require('../activity.json');

export const fetchRecentActivities = () => {
  return recentActivities;
};

module.exports = recentActivities;