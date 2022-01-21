import React from 'react'
import { SOCIALS } from './socials.constants'

import './socials.scss'
import CoreUiIcon from '@app/components/icons/coreui'

function SocialIcon({ props }) {
  return (
    <a className='socials-icon mt-2 primary-link' title={props.tooltip} href={props.url} key={props.uid}>
      <CoreUiIcon icon={props.icon} />
    </a>
  )
}

function renderSocials() {
  const list = []
  SOCIALS.forEach((elem) => {
    list.push(<SocialIcon props={elem} />)
  })
  return list
}

export function Socials() {
  const socialList = renderSocials()
  return <div className='mb-3 mt-3'>{socialList}</div>
}

export default Socials
