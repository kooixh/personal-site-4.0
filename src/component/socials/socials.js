import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIALS } from './socials.constants';

import './socials.scss';

function renderSocials() {
    const list = [];
    SOCIALS.forEach((elem) => {
        list.push(
            <a className="socialsIcon mt-2 primary-link" href={elem.url} key={elem.uid}>
                <FontAwesomeIcon icon={elem.icon} className="socialsButton" />
            </a>
        );
    });
    return list;
}

export function Socials() {
    const socialList = renderSocials();
    return <div className="mb-3 mt-3">{socialList}</div>;
}

export default Socials;
