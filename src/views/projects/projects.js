import React from 'react';
import { Table } from 'react-bootstrap';

import { PROJECT_DATA } from '@app/views/projects/projects.data';

import './projects.scss';
import { Helmet } from 'react-helmet';

function ProjectHelmet() {
  return (
    <Helmet>
      <title>My Projects</title>
      <meta name="description" content="side projects I have worked on in the past" />
    </Helmet>
  );
}

function ProjectTableHead() {
  return (
    <thead>
      <tr className="tableHeadRecord">
        <th>Project Name</th>
        <th>Description</th>
        <th />
      </tr>
    </thead>
  );
}

function renderProjectContent() {
  const contents = [];
  for (const key in PROJECT_DATA) {
    contents.push(<ProjectBodyContent prop={PROJECT_DATA[key]} />);
  }
  return contents;
}

function ProjectBodyContent({ prop }) {
  const projectHref = `/projects/${prop.uid}`;
  return (
    <tr className="tableHeadRecord">
      <td>{prop.name}</td>
      <td>{prop.description}</td>
      <td>
        <a href={projectHref} className="primary-link">
          View Project
        </a>
      </td>
    </tr>
  );
}

function ProjectTableBody() {
  const contents = renderProjectContent();
  return <tbody>{contents}</tbody>;
}

function ProjectTable() {
  return (
    <Table striped bordered hover variant="dark">
      <ProjectTableHead />
      <ProjectTableBody />
    </Table>
  );
}

export function Project() {
  return (
    <div>
      <ProjectHelmet />
      <article className="content mt-3">
        <section className="pl-5 m-0 mt-3 pr-5 mb-5">
          <div className="mb-4">
            <h1 className="page-header">My Projects</h1>
          </div>
          <ProjectTable />
        </section>
      </article>
    </div>
  );
}

export default Project;
