import React from 'react';
import {Route} from 'react-router-dom';

import RecentActivitiesContainer from "./components/recentActivities/recentActivitiesContainer";

const App = () => (
    <Route exact path="/" component={RecentActivitiesContainer} />
);

export default App;