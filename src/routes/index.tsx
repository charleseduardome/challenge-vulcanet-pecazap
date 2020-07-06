import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import DashboardPlans from '../pages/Plans';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={DashboardPlans} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
