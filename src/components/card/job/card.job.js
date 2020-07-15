import React from 'react';

function JobName({ props }) {
    return (
        <div className="col-7">
            <h3 className="mb-0 title">{props.title}</h3>
            <div className="mb-3">
                <a className="subheading primary-link" href={props.jobLink} title={props.jobLinkTitle}>
                    {props.company}
                </a>
            </div>
            <p>{props.description}</p>
        </div>
    )
}

function JobDate({ props }) {
    return (
        <div className="col text-center">
            <p className="inner-heading font-weight-bold d-inline">{props.date}</p>
        </div>
    )
}

export function JobCard({ props }) {
    return (
        <div className="row mb-5">
            <JobName props={props}/>
            <JobDate props={props}/>
        </div>
    );
}

export default JobCard;
