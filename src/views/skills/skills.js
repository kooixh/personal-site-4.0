import React from "react";
import { Helmet } from "react-helmet";

function SkillsHelmet() {
    return (
        <Helmet>
            <title>Skills</title>
            <meta
                name="description"
                content="My basic info and socials links"
            />
        </Helmet>
    )
}

export function Skills() {
    return (
        <article className="content mt-3">
            <SkillsHelmet />
            <p>Test</p>
        </article>
    )
}

export default Skills;

