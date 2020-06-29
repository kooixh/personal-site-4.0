import React from "react";
import './experience.card.css';


export function JobCard({jobName, companyName, desc, date}) {
    return (
        <div className="row mb-5">
            <div className="col-7">
                <h3 className="mb-0 title">{jobName}</h3>
                <div className="mb-3 subheading">{companyName}</div>
                <p>
                    {desc}
                </p>
            </div>

            <div className="col text-center">
                <p className="largest font-weight-bold d-inline date">
                    {date}
                </p>
            </div>
        </div>
    )
}

export default JobCard;