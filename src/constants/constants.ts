export const APP_NAME = 'Christian Engmann';

// type iNavigation {
//     id: number;
//     title: string;
//     to: string;
//     onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
// }
// var arr: iNavigation[] = [
//     { id: 0, title: "Available", to: "" },
//     { id: 1, title: "Ready", to: "" },
//     { id: 2, title: "Started", to: "" }
// ];

export const NAVIGATION = {
    ROUTE: [
        { id: 0, title: '.home();',         to: 'home'},
        { id: 1, title: '.about();',        to: 'about'},
        { id: 2, title: '.projects();',     to: 'projects'},
        // { id: 3, title: '.skills();',       to: 'skills'},
        { id: 4, title: '.contact();',      to: 'contact'},
        // { id: 5, title: 'Request A Project >',  to: 'hire'},
    ]
}

export const LINKS = {
    SOCIAL: {
        Linkedin:   'https://www.linkedin.com/in/cengmann/',
        Github:     'https://github.com/CEngmann91',
        Codepen:    'https://codepen.io/CEngmann91',
        Facebook:   'https://www.facebook.com/cengmann',
        Twitter:    'https://twitter.com/cengmann',
    },
    RESUME: "https://docs.google.com/document/d/1Jgd9LSo1q0FJS4twiiCpePnRycwE0MHOSj5eFBX78_A/edit?usp=sharing"
}