import React from 'react';
import { Switch } from 'react-router-dom';

import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import MyRoute from './MyRoute';

export default function Routes() {
    return (
        <Switch>
            <MyRoute exact path="/login" component={Login} />
            <MyRoute path="*" component={NotFound} />
        </Switch>
    );
}
