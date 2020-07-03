import React from 'react';
import Socials from '@app/components/socials';

import Emoji from '@app/components/emoji';

import { CV, ProfilePic } from '@app/assets/profile/profile.assets';

import './user.info.scss';

function ProfileOverview() {
    return (
        <div className="mr-5 mt-3 pr-5">
            <p>
                Dedicated software engineer, passionate in delivering high quality software and emphasises attention to
                detail and writing clean code. I am a diligent team player, leader and fast learner who is willing to
                work with different technology stacks in order to acquire more knowledge in software engineering.
            </p>
            <p>
                Excellent problem solver with many years in programming, interested in data structures and algorithms. I
                Enjoy trying and learning about different programming languages and technologies. I spend a lot of my
                undergraduate and postgraduate careers researching and learning about Formal Methods.
            </p>
        </div>
    );
}

export function UserInfo() {
    return (
        <section className="pl-5 m-0 mt-3">
            <div className="row">
                <div className="col-8">
                    <h1 className="page-header">Xiu Hong Kooi</h1>
                    <div>
                        <p className="subheading">
                            Software Engineer <Emoji symbol="👨‍💻" label="tech guy" />
                            <br />
                            <a className="primary-link" href={CV}>
                                CV <Emoji symbol="📄" label="document" />
                            </a>
                            <br />
                            <a className="primary-link" href="mailto:xiuhong.kooi977055@gmail.com">
                                kooixh97@gmail.com <Emoji symbol="📧" label="email" />
                            </a>
                        </p>
                    </div>
                    <Socials />
                </div>
                <div className="col mr-3">
                    <span>
                        <img
                            className="img-fluid img-profile rounded-circle mb-2 profilepic"
                            src={ProfilePic}
                            alt="profile"
                        />
                    </span>
                </div>
            </div>

            <ProfileOverview />
        </section>
    );
}

export default UserInfo;
