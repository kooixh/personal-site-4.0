import React from 'react';
import { Helmet } from 'react-helmet';
import Experience from '../../component/experience';
import './profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserInfo from "@app/component/user.info";
import Education from "@app/component/education/education";


function ProfileHelmet() {
    return (
        <Helmet>
            <title>Xiu Hong Profile</title>
            <meta
                name="description"
                content="My basic info and socials links"
            />
        </Helmet>
    )
}

export function Profile() {
    return (
        <article className="content mt-3">
            <ProfileHelmet />
            <div>
                <UserInfo />
                <Experience />
                <Education/>
            </div>
        </article>
    );
}

export default Profile;
