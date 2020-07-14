import React from 'react';
import { SOCIALS } from './socials.constants';

import './socials.scss';
import CoreUiIcon from "@app/components/icons/coreui/coreui.icons";

function renderSocials() {
    const list = [];
    SOCIALS.forEach((elem) => {
        list.push(
            <a className="socialsIcon mt-2 primary-link" title={elem.tooltip} href={elem.url} key={elem.uid}>
                <CoreUiIcon icon={elem.icon} className="socialsButton" />
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
