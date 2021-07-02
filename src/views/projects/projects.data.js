import NE_WEATHER from '@app/assets/projects/screenshots/ne_1.png';
import QCK_BUDGET from '@app/assets/projects/screenshots/qck_2.png';
import TRS from '@app/assets/projects/screenshots/rewrite_1.png';

import DISSERTATION from '@app/assets/projects/dissertation.pdf';
import MPHIL_DISSERTATION from '@app/assets/projects/acs-dissertation.pdf';

export const PROJECT_DATA = {
    refine: {
        name: 'Refinement Types in Read-World Programming',
        uid: 'refine',
        description: 'MPhil Dissertation on Refinement Type System in a real-world programming language',
        links: [
            {
                name: 'Read The Dissertation',
                href: MPHIL_DISSERTATION,
            },
        ],
        details:
            'The dissertation focused on introducing Refinement Types in a C-Style language. In the dissertation I looked at ' +
            'existing language that uses refinement type and formalise new semantics for a new language.',
        techDetails: 'The work is purely theoretical and thus does not involve any implementation.',
    },
    genid: {
        name: 'Genid',
        uid: 'genid',
        type: 'cli',
        description: 'Unique Numberic and Alphanumeric random Id generator',
        links: [
            {
                name: 'View On GitHub',
                href: 'https://github.com/kooixh/genid',
            },
        ],
        details:
            'Genid is a simple CLI application that generates Random IDs , the IDs are guaranteed to be universally unique and can be in both numeric or alphanumeric.',
        techDetails: 'The application is written in Go and uses Redis as a data storage for the IDs.',
    },
    'home-automation': {
        name: 'Home Automation System',
        uid: 'home-automation',
        type: 'web',
        description: 'A Microservice that allows users to control smart home appliances like lighting and plugs.',
        links: [
            {
                href: 'https://github.com/kooixh/home-automation',
                name: 'View On GitHub',
            },
        ],
        details:
            'The api is built to work with TP-Link Smart devices, the goal was for this microservice is so I can build a control panel for my house.',
        techDetails:
            'The Microservice was built using NodeJS and ExpressJS, a MongoDB instance is used to store details of devices and states.',
    },
    rewrite: {
        name: 'Term Rewriting System',
        uid: 'rewrite',
        type: 'desktop',
        description: 'Tool for performing a learning Term Rewriting',
        links: [
            {
                name: 'View On GitHub',
                href: 'https://github.com/kooixh/rewrite-system',
            },
            {
                name: 'Read The Dissertation',
                href: DISSERTATION,
            },
        ],
        details:
            'My undergraduate dissertation. This project is to create an easy to use Term Rewriting system that is powerful and easy to use.' +
            ' For an in depth understanding you can read my dissertation :)',
        techDetails:
            'The system is written in core Java and Swing, a library called JGraph for building the graphs. It was then ported to be a REST API.',
        screenShot: {
            img: TRS,
            height: '50%',
            width: '50%',
        },
    },
    'qck-budget': {
        name: 'QcK Budget: Simple Money Manager',
        uid: 'qck-budget',
        type: 'mobile',
        description: 'iOS budget tracking app',
        links: [
            {
                name: 'View On GitHub',
                href: 'https://github.com/kooixh/QcK-Budget',
            },
        ],
        details:
            'QcK Budget is an iOS app that provides user quick and simple way to track and manage their money. This app was a learning project that introduced me to mobile app development',
        techDetails: 'It was initially built with Visual Studio and Xamarin.iOS and it was then changed to Ionic.',
        screenShot: {
            img: QCK_BUDGET,
            height: '350px',
            width: '250px',
        },
    },
    'ne-weather': {
        name: 'NE Weather',
        uid: 'ne-weather',
        type: 'mobile',
        description: 'Android weather and air pollution app with activities suggestions',
        links: [],
        details:
            'This is my second year undergrad group software engineering project. NE Weather is a location based weather app that provides users event suggestions based on the current weather and air pollution conditions. ' +
            'The app uses sensors around the North East on England to collect information around the city.',
        techDetails:
            'The core app was written in Java for Android. ' +
            'The backend was handled by an RESTful API provided by the school, it allows us to collect weather data around the city. We used the data and created an App which gives the user activity suggestions based on the current weather condition. ' +
            'We also utilised other APIs to provide more functionality like search and more.',
        screenShot: {
            img: NE_WEATHER,
            height: '400px',
            width: '250px',
        },
    },
    anomify: {
        name: 'Anomify',
        uid: 'anomify',
        type: 'web',
        description: 'Anonymous messaging service. A website for people to leave anonymous to each other.',
        links: [],
        details:
            'This project is my first introduction to web development. Previously my projects did not require any real backend services, the main purpose of this project is to learn about building backend services.',
        techDetails:
            'I used a very standard LAMP stack. the site is written in PHP with a MySQL database and deployed on an Apache server.',
    },
};
