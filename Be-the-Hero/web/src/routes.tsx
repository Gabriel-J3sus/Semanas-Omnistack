import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import CreateEvent from './pages/Create_Event';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />

                <Route path="/home" component={Home} />
                <Route path="/create" component={CreateEvent} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;