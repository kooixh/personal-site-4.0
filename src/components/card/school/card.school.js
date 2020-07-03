import React from 'react';
import Emoji from '@app/components/emoji';

import './card.school.scss';

export function SchoolCard({ props }) {
    return (
        <div className="row mb-5">
            <div className="col-7">
                <a className="mb-0 subheading h3 primary-link" href={props.schoolLink} title={props.schoolLinkTitle}>
                    {props.schoolName} <Emoji symbol={props.schoolEmoji} label={props.schoolEmojiLabel} />
                </a>
                <div className="mb-3">
                    <p className="subheading">
                        {props.degree}
                        <span className="grades"> {props.grades}</span> <Emoji symbol={props.gradesEmoji} />
                    </p>
                </div>
                <p className="mb-3">{props.description}</p>
                <p className="mb-3">{props.dissertation}</p>
            </div>
            <div className="col text-center">
                <p className="inner-heading font-weight-bold d-inline primary-light-red-text">{props.date}</p>
            </div>
        </div>
    );
}

export default SchoolCard;
