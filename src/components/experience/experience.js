import React from 'react';
import JobCard from '@app/components/card/job';

import 'bootstrap/dist/css/bootstrap.min.css';

import Emoji from '@app/components/emoji';
import { JOBS } from './experience.constants';

function renderJobs() {
    const jobs = [];
    JOBS.forEach((elem) => {
        jobs.push(<JobCard props={elem} key={elem.uid} />);
    });
    return jobs;
}

export function Experience() {
    const jobs = renderJobs();
    return (
        <section className="pl-5 pt-3">
            <div className="w-100" id="experiences">
                <h2 className="mb-5 heading">
                    Experience <Emoji symbol="💼" label="briefcase" />
                </h2>
                {jobs}
            </div>
        </section>
    );
}

export default Experience;
