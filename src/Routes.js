import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './components/Home';
import Hoc from './02-HOC/Hoc';
import RenderProps from './01-render-props/RenderProps';
import Hooks from './03-Hooks/Hooks';

const history = createBrowserHistory();
const Routes = () => (
  <>
    <Router history={history} basename={'/'}>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/render-props'} component={RenderProps} />
        <Route exact path={'/hoc'} component={Hoc} />
        <Route exact path={'/hooks'} component={Hooks} />
      </Switch>
    </Router>
  </>
);

export default Routes;
