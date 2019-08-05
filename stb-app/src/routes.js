import React, { Suspense } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

export const history = createBrowserHistory(); 

const AppRouter = () => (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          
        </Switch>
      </Suspense>
    </Router>
  );

export default AppRouter;