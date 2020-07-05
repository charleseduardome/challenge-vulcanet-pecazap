import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DashboardPlans from '../pages/Plans';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={DashboardPlans} />
  </Switch>
);

export default Routes;
