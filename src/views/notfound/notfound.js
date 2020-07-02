import React from 'react';
import {Helmet} from 'react-helmet';
import Emoji from '@app/component/emoji';

import './notfound.scss';

function NotFoundHelmet() {
    return (
        <Helmet>
            <title>Not Found</title>
            <meta name="description" content="Page not found"/>
        </Helmet>
    );
}

export function NotFound() {
    return (
        <article className="content mt-3">
            <NotFoundHelmet/>
            <div>
                <section className="p-5 m-0 mt-3 text-center">
                    <p className="error-message">
                        Oh No there was a problem with your request <Emoji symbol="😭" label="cry"/>
                    </p>
                    <h1 className="error-header">
                        404 Not Found <Emoji symbol="🤷‍♂️" label="unknown"/>
                    </h1>
                    <p className="error-message">
                        It looks like the page you requested was not found on the server <Emoji symbol="🤔️"
                                                                                                label="hmmm"/>
                    </p>
                </section>
            </div>
        </article>
    );
}

export default NotFound;
