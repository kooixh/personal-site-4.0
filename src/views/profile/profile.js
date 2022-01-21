import React from 'react'
import { Helmet } from 'react-helmet'
import UserInfo from '@app/components/user.info'
import Education from '@app/components/education'
import Experience from '../../components/experience'

import 'bootstrap/dist/css/bootstrap.min.css'

function ProfileHelmet() {
  return (
    <Helmet>
      <title>Xiu Hong Profile</title>
      <meta name='description' content='My basic info and socials links' />
    </Helmet>
  )
}

export function Profile() {
  return (
    <article className='content mt-3'>
      <ProfileHelmet />
      <div>
        <UserInfo />
        <Experience />
        <Education />
      </div>
    </article>
  )
}

export default Profile
