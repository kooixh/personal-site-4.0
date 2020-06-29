import React from 'react';
import Section from '@app/component/section';
import JobCard from "@app/component/job.card/experience.card";

import 'bootstrap/dist/css/bootstrap.min.css';

import { JOBS } from './experience.constants';

import './experience.css';
import Emoji from "@app/component/emoji";

function renderJobs() {

    let jobs = [];
    JOBS.forEach((elem) => {
       jobs.push(
           <JobCard jobName={ elem.title } companyName={ elem.company } desc={ elem.description } date={ elem.date } key={elem.uid}/>
       )
    });
    return jobs;
}

export function Experience() {
    let jobs = renderJobs();
    return (
        <Section className="pl-5 pt-3">
            <div className="w-100" id="experiences">
                <h2 className="mb-5 heading">Experience <Emoji symbol="💼" label="briefcase"/></h2>
                { jobs }
            </div>
        </Section>
    );
}

export default Experience;
