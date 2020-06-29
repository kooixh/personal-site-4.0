import Section from "../section";
import Profile from "@app/assets/profile-pic-new.png";
import Socials from "@app/component/socials";
import React from "react";

import './user.info.css';
import Emoji from "@app/component/emoji";

import CV from '@app/assets/cv.pdf';


function ProfileOverview() {
    return (
        <div className="mr-5 mt-3 pr-5">
            <p>
                Dedicated software engineer, passionate in delivering high quality software and emphasises
                attention to detail and writing clean code. I am a diligent team player, leader and fast learner who is willing
                to work with different technology stacks in order to acquire more knowledge in software engineering.
            </p>
            <p>
                Excellent problem solver with many years in programming, interested in data structures and algorithms.
                I Enjoy trying and learning about different programming languages and technologies. I spend a lot
                of my undergraduate and postgraduate careers researching and learning about Formal Methods.
            </p>
        </div>
    )
}


export function UserInfo() {
    return (
        <Section className="pl-5 m-0 mt-3">
            <div className="row">
                <div className="col-8">
                    <h1 className="pageHeader">Xiu Hong Kooi</h1>
                    <div className="subheading">
                        Software Engineer <Emoji symbol="👨‍💻" label="tech guy"/>
                        <br />
                        <a className="infolink" href={CV}>CV <Emoji symbol="📄" label="document"/></a>
                        <br />
                        <a className="infolink" href="mailto:xiuhong.kooi977055@gmail.com">
                            kooixh97@gmail.com <Emoji symbol="📧" label="email"/>
                        </a>
                    </div>
                    <Socials />
                </div>
                <div className="col mr-3">
                  <span>
                    <img
                        className="img-fluid img-profile rounded-circle mb-2 profilepic"
                        src={Profile}
                        alt=""
                    />
                  </span>
                </div>
            </div>

            <ProfileOverview/>
        </Section>
    )
}

export default UserInfo;