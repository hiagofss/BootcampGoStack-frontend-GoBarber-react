import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact componen={SignIn} />
      <Route path="/register" componen={SignUp} />
      <Route path="/dashboard" componen={Dashboard} />
      <Route path="/profile" componen={Profile} />
    </Switch>
  );
}
