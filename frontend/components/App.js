import React from 'react';
import {Route} from 'react-router-dom';

import recentActivitiesContainer from "./recentActivities/recentActivitiesContainer";

const App = () => (
  <div>
    <Route exact path="/" component={recentActivitiesContainer} />
  </div>
);

export default App;