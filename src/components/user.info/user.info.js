import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import Socials from '@app/components/socials'

import Emoji from '@app/components/emoji'

import { CV, ProfilePic } from '@app/assets/profile/profile.assets'

import './user.info.scss'

function ProfileOverview() {
  return (
    <div className='mr-5 mt-3 pr-5'>
      <p>
        Dedicated software engineer, passionate in delivering high quality software and emphasises attention to detail
        and writing clean code. I am a diligent team player, leader and fast learner who is willing to work with
        different technology stacks in order to acquire more knowledge in software engineering.
      </p>
      <p>
        Excellent problem solver with many years in programming, interested in data structures and algorithms. I Enjoy
        trying and learning about different programming languages and technologies. I spend a lot of my undergraduate
        and postgraduate careers researching and learning about Programming Languages Theory.
      </p>
    </div>
  )
}

export function UserInfo() {
  return (
    <section className='pl-5 m-0 mt-3'>
      <div className='row'>
        <div className='col-8'>
          <h1 className='page-header'>Xiu Hong Kooi</h1>
          <div>
            <p className='subheading'>
              Software Engineer <Emoji symbol='👨‍💻' label='tech guy' /> Computer Scientist{' '}
              <Emoji symbol='💻' label='laptop' />
            </p>
            <p className='subheading mt-0 pt-0'>
              University of Cambridge <Emoji symbol='🏫' label='school' /> MoneyLion <Emoji symbol='💼' label='work' />
            </p>
            <a className='primary-link subheading' href={CV}>
              CV <Emoji symbol='📄' label='document' />
            </a>
            <br />
            <a className='primary-link subheading' href='mailto:xhk20@cantab.ac.uk'>
              xhk20@cantab.ac.uk <Emoji symbol='📧' label='email' />
            </a>
          </div>
          <Socials />
        </div>
        <SRLWrapper>
          <div className='col mr-3'>
            <span>
              <img
                className='img-fluid img-profile rounded-circle mb-2 profile-pic'
                src={ProfilePic}
                alt='Xiu Hong Kooi'
              />
            </span>
          </div>
        </SRLWrapper>
      </div>

      <ProfileOverview />
    </section>
  )
}

export default UserInfo
