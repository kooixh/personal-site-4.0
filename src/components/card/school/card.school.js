import React from 'react'
import Emoji from '@app/components/emoji'

import './card.school.scss'

function SchoolName({ props }) {
  return (
    <a className='mb-0 subheading h3 primary-link' href={props.schoolLink} title={props.schoolLinkTitle}>
      {props.schoolName} <Emoji symbol={props.schoolEmoji} label={props.schoolEmojiLabel} />
    </a>
  )
}

function SchoolSubHeading({ props }) {
  return (
    <div className='mb-3'>
      <p className='subheading'>
        {props.degree}
        <span className='grades'> {props.grades}</span> <Emoji symbol={props.gradesEmoji} />
      </p>
    </div>
  )
}

function SchoolDates({ props }) {
  return (
    <div className='col text-center'>
      <p className='inner-heading font-weight-bold d-inline'>{props.date}</p>
    </div>
  )
}

export function SchoolCard({ props }) {
  return (
    <div className='row mb-5'>
      <div className='col-7'>
        <SchoolName props={props} />
        <SchoolSubHeading props={props} />
        <p className='mb-3'>{props.description}</p>
        <p className='mb-3'>Dissertation: {props.dissertation}</p>
      </div>
      <SchoolDates props={props} />
    </div>
  )
}

export default SchoolCard
