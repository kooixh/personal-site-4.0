import React from 'react';

export function JobCard({ props }) {
    return (
        <div className="row mb-5">
            <div className="col-7">
                <h3 className="mb-0 title">{props.title}</h3>
                <div className="mb-3">
                    <a className="subheading primary-link" href={props.jobLink} title={props.jobLinkTitle}>
                        {props.company}
                    </a>
                </div>
                <p>{props.description}</p>
            </div>

            <div className="col text-center">
                <p className="inner-heading font-weight-bold d-inline">{props.date}</p>
            </div>
        </div>
    );
}

export default JobCard;
