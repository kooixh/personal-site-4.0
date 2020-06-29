import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../header";
import Profile from "../../views/profile";
import Skills from "@app/views/skills";
import Footer from "@app/component/footer";

export function Main() {
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/skills">
                        <Skills/>
                    </Route>
                    <Route path="/">
                        <Profile/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </div>

    );
}

export default Main;