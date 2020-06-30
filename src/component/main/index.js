import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../header";
import Profile from "../../views/profile";
import Skills from "@app/views/skills";
import Footer from "@app/component/footer";
import Project from "@app/views/projects";
import ProjectDetails from "@app/views/projects/projects.details";
import NotFound from "@app/views/notfound";

export function Main() {
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/skills">
                        <Skills/>
                    </Route>
                    <Route exact path="/projects/:pid" render={(props) =>
                        <ProjectDetails id={props.match.params.pid}/>
                    }>
                    </Route>
                    <Route exact path="/projects">
                        <Project/>
                    </Route>

                    <Route exact path="/">
                        <Profile/>
                    </Route>
                    <Route path="">
                        <NotFound/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </div>

    );
}

export default Main;