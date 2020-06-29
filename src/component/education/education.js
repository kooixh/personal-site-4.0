import React from "react";
import Section from "@app/component/section";
import Emoji from "@app/component/emoji";

import { SCHOOLS } from "@app/component/education/education.constants";
import SchoolCard from "@app/component/school.card/school.card";


function renderSchools() {
    let schools = [];
    SCHOOLS.forEach((elem) => {
       schools.push(
           <SchoolCard props={elem} key={elem.uid}/>
       )
    });
    return schools;
}

export function Education() {
    let schools = renderSchools();
    return (
        <Section className="pl-5 pt-3">
            <div className="w-100" id="education">
                <h2 className="mb-5 heading">Education <Emoji symbol="🎓" label="school"/></h2>
            </div>
            { schools }
        </Section>
    )
}

export default Education;