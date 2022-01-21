import React from 'react'
import Skills from '@app/views/skills/skills'
import ProjectDetails from '@app/views/projects/projects.details'
import Profile from '@app/views/profile'
import Project from '@app/views/projects'
import NotFound from '@app/views/notfound/notfound'

export const routes = [
  {
    path: '/skills',
    render: () => <Skills />,
    status: 200,
    uid: 1,
  },
  {
    path: '/projects/:pid',
    render: (props) => <ProjectDetails id={props.match.params.pid} />,
    status: 200,
    uid: 2,
  },
  {
    path: '/projects',
    render: () => <Project />,
    status: 200,
    uid: 3,
  },
  {
    path: '/',
    render: () => <Profile />,
    status: 200,
    uid: 4,
  },
  {
    path: '*',
    render: () => <NotFound />,
    status: 404,
    uid: 5,
  },
]
