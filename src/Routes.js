import {createBrowserHistory} from 'history';
import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import RenderProps from './01-render-props/RenderProps';
import Hoc from './02-HOC/Hoc';
import Hooks from './03-Hooks/Hooks';
import Navbar from './components/Navigation/Navbar';

const history = createBrowserHistory();
const Routes = () => (
    <>
        <Router history={history} basename={'/'}>
            <Navbar/>
            <Switch>
                <Route exact path={'/'} component={RenderProps}/>
                <Route exact path={'/render-props'} component={RenderProps}/>
                <Route exact path={'/hoc'} component={Hoc}/>
                <Route exact path={'/hooks'} component={Hooks}/>
            </Switch>
        </Router>
    </>
);

export default Routes;
