import React from "react";
import Section from "@app/component/section";

import { PROJECT_DATA } from "@app/views/projects/projects.data";
import Emoji from "@app/component/emoji";
import {Helmet} from "react-helmet";


function ProjectDetailsHelmet(props) {
    return (
        <Helmet>
            <title>{props.name}</title>
            <meta
                name="description"
                content={props.description}
            />
        </Helmet>
    )
}

function generateProjectEmoji(props) {
    let symbol = props.type === 'mobile' ? '📱' : '💻';
    return (
        <Emoji symbol={symbol} label={props}/>
    )
}

function renderProjectLinks(links) {
    let linksRendered = [];
    links.forEach((elem) => {
        linksRendered.push(
            <ProjectLink link={elem} />
        );
    });
    return linksRendered;
}


function ProjectLink(props) {
    return (
        <li>
            <Emoji symbol="🔗" label="link"/> <a href={props.link.href}>{props.link.name}</a>
        </li>
    )
}


function ProjectLinks({links}) {

    if (links.length === 0) {
        return (
            <div>
            </div>
        )
    }

    let linksRendered = renderProjectLinks(links);
    return (
        <div className="subheading mt-5">
            <h2 className="">Links <Emoji symbol="🌏" label="earth"/></h2>
            <ul className="projectsLink">
                { linksRendered }
            </ul>
        </div>
    )
}

function ProjectScreenShot({screenshot}) {
    if (screenshot === undefined) {
        return (
            <div>
            </div>
        )
    }

    return (
        <div className="subheading mt-5">
            <h2 className="">ScreenShot <Emoji symbol="📷" label="camera"/></h2>
            <div className="">
                <img src={screenshot.img} alt="screenshot" width={screenshot.width} height={screenshot.height} />
            </div>
        </div>
    )
}

export function ProjectDetails({id}) {

    let project = PROJECT_DATA[id];
    return (
        <div>
            <ProjectDetailsHelmet name={project.name} description={project.description} />
            <article className="content mt-3">
                <Section className="pl-5 m-0 mt-3 pr-5 mb-5">
                    <div className="mb-4">
                        <h1 className="pageHeader">{ project.name } { generateProjectEmoji(project.type) }</h1>
                        <div className="subheading">
                            { project.description }
                        </div>

                        <ProjectLinks links={project.links}/>

                        <div className="subheading mt-5">
                            <h2 className="">Details <Emoji symbol="📝" label="details"/></h2>
                            <p>{ project.details }</p>
                        </div>

                        <div className="subheading mt-5">
                            <h2 className="">Tech Details <Emoji symbol="🛠" label="tech details"/></h2>
                            <p>{ project.techDetails }</p>
                        </div>

                        <ProjectScreenShot screenshot={project.screenShot}/>
                    </div>
                </Section>
            </article>
        </div>
    )
}

export default ProjectDetails;