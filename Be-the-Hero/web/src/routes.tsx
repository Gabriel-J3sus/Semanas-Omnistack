import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import CreateEvent from './pages/Create_Event';

interface Props {
    toggleTheme(): void;
}

function Routes({ toggleTheme }:Props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={(props) => <Login {...props} toggleTheme={toggleTheme} />} />
                <Route path="/register" component={Register} />

                <Route path="/home/:id" render={(props) => <Home {...props} toggleTheme={toggleTheme} />} />
                <Route path="/create/:id" component={CreateEvent} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;