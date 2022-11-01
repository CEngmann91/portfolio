import React from 'react';
import { LINKS } from '../../../constants/constants';
import { Email, Linkedin, Github, Codepen, Facebook, Twitter, } from '../../../utils/icons';
import './SocialMedia.scss';

interface iSocial {
    path: string;
    colour: string;
    children: JSX.Element;
}

const socials: iSocial[] = [
    {
        path: "#",
        colour: '#0072b1', //'linear-gradient(red, yellow)',
        children: <Email className="icon" />,
    },
    {
        path: LINKS.SOCIAL.Linkedin,
        colour: '#0072b1',
        children: <Linkedin className="icon" />,
    },
    {
        path: LINKS.SOCIAL.Github,
        colour: '#171515',
        children: <Github className="icon" />,
    },
    {
        path: LINKS.SOCIAL.Codepen,
        colour: '#dd4b39',
        children: <Codepen className="icon" />,
        // children: <Instagram className="icon" />,
    },
    {
        path: LINKS.SOCIAL.Facebook,
        colour: '#0077b5',
        children: <Facebook className="icon" />,
    },
    {
        path: LINKS.SOCIAL.Twitter,
        colour: '#55acee',
        children: <Twitter className="icon" />,
    }
]

const SocialMedia: React.FC = () => {

    return (
        <div className="app__social">
            <ul>
                {socials.map((item, index) => (
                    <li>
                        <a href={item.path} data-index={index} data-colour={item.colour}>
                            {item.children}
                            {/* {index} */}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="app__vertical-line app__social-line"></div>
        </div>
    )
};

export default SocialMedia;