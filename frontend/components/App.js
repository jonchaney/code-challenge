import React from 'react';
import {Route} from 'react-router-dom';

import RecentActivitiesContainer from "./recentActivities/recentActivitiesContainer";

const App = () => (
  <div>
    <Route exact path="/" component={RecentActivitiesContainer} />
  </div>
);

export default App;