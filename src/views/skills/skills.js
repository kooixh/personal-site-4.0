import React from "react";
import {Helmet} from "react-helmet";
import Section from "@app/component/section";

import {TECH_ICONS} from "@app/views/skills/skills.constants";
import './skills.css';
import Emoji from "@app/component/emoji";

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
                <h2 className="mb-3">Tech Stack <Emoji symbol="🛠️" label="tool"/></h2>
            </div>
            <p>
                This is a list of technology I have worked with in the past. I am primarily a Backend Web
                Engineer who is experienced in working with Microservices and Cloud Technologies.
            </p>
            <p>
                I have years of programming experiences in different paradigm such as Object-Oriented and functional.
                My go to programming language is Java because of my experience with it, but I am also fluent in multiple languages.

            </p>
            <p>
                Spring Boot, Express and Flask are the web server framework I have the most experience with. Outside of
                backend development I have done projects on Mobile App development in Native Android as well as hybrid
                framework like Ionic.
            </p>
            <p>
                Frontend is not really my forte but I do have some experience in React (which this site is built on) as well
                as Angular.
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
                <div className="col-10">
                    <h1 className="pageHeader">Technical Skills</h1>
                    <TechStack/>
                    <StuffWorkOn/>
                    <DevelopmentHistory/>
                </div>
            </div>
        </Section>
    );
}

function DevelopmentHistory() {
    return (
        <div className="devHistory">
            <div className="subheading mt-5">
                <h2 className="">My History In Tech <Emoji symbol="📆" label="calendar"/></h2>
            </div>

            <p className="mt-3">
                My life in the technology world started way back in 2012, when I was gifted a laptop by my parents. Being the
                only tech enthusiast in the house, I found myself needing to search to internet to solve a lot of tech problems,
                like how to install the latest version of Windows, how to download a Torrent, etc. From there I gradually
                gained an interest in technology.
            </p>
            <p>
                My programming journey began <a href="https://twitter.com/kooixiuhong/status/503448692871811072">August 2014</a>,
                my first language was C# and I created a simple Rubik's Cube average calculator.
                I then experimented further by creating a simple web browser and a statistic calculator,
                which built my interest in programming. I then went on to university and my passion for programming never
                stopped.
            </p>
            <p>
                I gained interest in software engineering when I started working on side projects such as an anonymous
                messaging sites, budget tracking mobile app, etc. I really like the feeling of developing a piece of software
                that is going to be used by people to better their life.
            </p>
        </div>
    )
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

