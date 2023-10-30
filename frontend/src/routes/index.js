import React from 'react';
import { Switch } from 'react-router-dom';
import MyRoute from './MyRoute';

import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Register from '../pages/Register';

export default function Routes() {
    return (
        <Switch>
            <MyRoute exact path="/" component={Home} isClosed />
            <MyRoute exact path="/login" component={Login} />
            <MyRoute exact path="/register" component={Register} />
            <MyRoute path="*" component={NotFound} />
        </Switch>
    );
}
