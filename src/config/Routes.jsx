import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import PortPage from '../pages/PortPage'


function Routes() {
    return (
        <Switch>
            <Route exact path='/PortfolioDK/' component={HomePage} />
            <Route exact path='/PortfolioDK/portfolio' component={PortPage} />
        </Switch>
    )
}
export default Routes