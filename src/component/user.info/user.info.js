import Section from "../section";
import Profile from "../../assets/profile-pic-resize.jpg";
import Socials from "../../views/socials";
import React from "react";

import './user.info.css';

export function UserInfo() {
    return (
        <Section className="pl-5 m-0 mt-3">
            <div className="row">
                <div className="col-8">
                    <h1 className="name">Xiu Hong Kooi</h1>
                    <div className="subheading">
                        Software Engineer 👨‍💻
                        <br />
                        <a className="infolink" href="cv.pdf">CV (pdf) 📄 </a>
                        <a className="infolink" href="mailto:xiuhong.kooi977055@gmail.com">
                            xiuhong.kooi977055@gmail.com 📧
                        </a>
                    </div>
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
            <div className="mr-5 mt-3 pr-5">
                <p>
                    Enthusiastic backend software engineer, passionate in delivering high quality software who emphasises attention to detail and writing clean code.
                </p>
                <p>
                    Problem solver, interested in data structures and algorithms. Enjoy trying and learning about different programming languages and technologies.
                </p>
            </div>
            <Socials />
        </Section>
    )
}

export default UserInfo;