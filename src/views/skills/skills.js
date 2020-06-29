import React from "react";
import {Helmet} from "react-helmet";
import Section from "@app/component/section";

import {TECH_ICONS} from "@app/views/skills/skills.constants";
import './skills.css';
import Emoji from "@app/component/emoji/emoji";

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

function renderTechStack() {
    let icons = [];
    TECH_ICONS.forEach((elem) => {
        icons.push(
            <li className="list-inline-item tech-icons pr-2" key={elem.uid}>
                <a href={elem.href}><i className={elem.icon}/></a>
            </li>
        )
    });
    return icons;
}

function TechStack() {
    let icons = renderTechStack();
    return (
        <div>
            <div className="subheading mt-5">
                <h2 className="mb-5">Tech Stack <Emoji symbol="🛠️" label="tool"/></h2>
            </div>
            <p>
                This is a list of technology I have worked with in the past. I am primarily a Backend Web
                Engineer who is experienced in working with Microservices and Cloud Technologies. I have years of
                programming experiences in different paradigm such as Object-Oriented and functional.
            </p>
            <ul className="list-inline">
                {icons}
            </ul>
        </div>
    )
}

function TechPreference(prop) {
    return (
        <li>
            <Emoji symbol="👉" label="point right"/> {prop.name} <Emoji symbol={prop.emoji} label={prop.emojiLabel}/>
        </li>
    )
}

function StuffWorkOn() {
    return (
        <div>
            <div className="subheading mt-5">
                <h2 className="">Stuff I like to work with <Emoji symbol="👍" label="tool"/></h2>
            </div>
            <ul className="work-preference">
                <TechPreference name="Backend Web Development" emoji="💻" emojiLabel="laptop"/>
                <TechPreference name="Mobile App Development" emoji="📱" emojiLabel="mobile"/>
                <TechPreference name="Cloud Technologies" emoji="☁️" emojiLabel="cloud technologies"/>
                <TechPreference name="DevOps and Automation" emoji="⚙️" emojiLabel="devops"/>
                <TechPreference name="Agile Methodologies" emoji="🔄" emojiLabel="agile"/>
            </ul>
        </div>
    )
}

function TechSkills() {
    return (
        <Section className="pl-5 m-0 mt-3">
            <div className="row">
                <div className="col-8">
                    <h1 className="pageHeader">Technical Skills</h1>
                    <TechStack/>
                    <StuffWorkOn/>
                </div>
            </div>
        </Section>
    );
}


export function Skills() {
    return (
        <article className="content mt-3">
            <SkillsHelmet/>
            <TechSkills/>
        </article>
    )
}

export default Skills;

