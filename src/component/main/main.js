import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../header";
import Footer from "@app/component/footer";

import {routes} from '@app/views';

function generateRoutes() {
    let routesRotuer = [];
    routes.forEach((elem) => {
        routesRotuer.push(
            <Route exact path={elem.path} render={elem.render}/>
        )
    });
    return routesRotuer;
}

export function Main() {
    let routers = generateRoutes();
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    {routers}
                </Switch>
                <Footer/>
            </Router>
        </div>

    );
}

export default Main;