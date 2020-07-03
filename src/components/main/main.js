import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '@app/components/footer';

import { routes } from '@app/views';
import Header from '../header';

function generateRoutes() {
    const routesRotuer = [];
    routes.forEach((elem) => {
        routesRotuer.push(<Route exact path={elem.path} render={elem.render} key={elem.uid} />);
    });
    return routesRotuer;
}

export function Main() {
    const routers = generateRoutes();
    return (
        <div>
            <Router>
                <Header />
                <Switch>{routers}</Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default Main;
