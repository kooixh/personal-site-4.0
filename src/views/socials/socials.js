import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIALS }  from './socials.constants';

import './socials.css';


function renderSocials() {
    let list = [];
    SOCIALS.forEach((elem) => {
        list.push(
            <a className="socialsIcon" href={ elem.url } key={elem.uid}>
                <FontAwesomeIcon icon={ elem.icon } className="socialsButton" />
            </a>
        )
    });
    return list;
}

export function Socials() {
    let socialList = renderSocials();
    return (
        <div className="mb-3">
            { socialList }
        </div>
    );
}

export default Socials;
