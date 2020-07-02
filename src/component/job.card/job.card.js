import React from 'react';

export function JobCard({ jobName, companyName, desc, date, jobLink }) {
  return (
    <div className="row mb-5">
      <div className="col-7">
        <h3 className="mb-0 title">{jobName}</h3>
          <div className="mb-3"><a className="subheading primary-link" href={jobLink}>{companyName}</a></div>
        <p>{desc}</p>
      </div>

      <div className="col text-center">
        <p className="inner-heading font-weight-bold d-inline primary-light-red-text">{date}</p>
      </div>
    </div>
  );
}

export default JobCard;
