import React from 'react';
import { Helmet } from 'react-helmet';
import Experience from '../experience';
import './profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserInfo from "../../component/user.info";


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
            </div>
        </article>
    );
}

export default Profile;
