import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Dashboard from '../dashboard/dashboard';
import Billing from '../billing/billing';

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard} />
    <Route path='/billing' component={Billing} />
    <Redirect from='*' to='/' />
  </Router>
);
