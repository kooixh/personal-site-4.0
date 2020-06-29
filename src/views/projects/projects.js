import React from "react";
import Section from "@app/component/section";

import { Table } from "react-bootstrap";

import { PROJECT_DATA } from "@app/views/projects/projects.data";

import './projects.css';
import {Helmet} from "react-helmet";


function ProjectHelmet() {
    return (
        <Helmet>
            <title>My Projects</title>
            <meta
                name="description"
                content="side projects I have worked on in the past"
            />
        </Helmet>
    )
}

function ProjectTableHead() {
    return (
        <thead>
            <tr className="tableHeadRecord">
                <th>Project Name</th>
                <th>Description</th>
                <th>View</th>
            </tr>
        </thead>
    )
}

function renderProjectContent() {
    let contents = [];
    for (let key in PROJECT_DATA) {
        contents.push(
            <ProjectBodyContent prop={PROJECT_DATA[key]}/>
        )
    }
    return contents;
}

function ProjectBodyContent({prop}) {
    let projectHref = '/projects/' + prop.uid;
    return (
        <tr className="tableHeadRecord">
            <td>{ prop.name }</td>
            <td>{ prop.description }</td>
            <td><a href={ projectHref }>View Project</a></td>
        </tr>
    )
}

function ProjectTableBody() {
    let contents = renderProjectContent();
    return (
        <tbody>
            { contents }
        </tbody>
    )

}

function ProjectTable() {
    return (
        <Table striped bordered hover variant="dark">
            <ProjectTableHead/>
            <ProjectTableBody/>
        </Table>
    )
}

export function Project() {
    return (
        <div>
            <ProjectHelmet/>
            <article className="content mt-3">
                <Section className="pl-5 m-0 mt-3 pr-5 mb-5">
                    <div className="mb-4">
                        <h1 className="pageHeader">My Projects</h1>
                    </div>
                    <ProjectTable/>
                </Section>
            </article>
        </div>
    )
}

export default Project;