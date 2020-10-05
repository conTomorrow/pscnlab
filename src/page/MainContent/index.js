import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../Layout';
import Error from '../404'

export default function MainContent() {
    return (
        <div>
            <Switch>
                <Route path='/404' component={Error} />
                <Route path='/' component={Layout} />
            </Switch>
        </div>
    )
}