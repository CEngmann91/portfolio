import './About.scss';
import React from 'react';
import { useThemeContext } from '../../utils/ThemeContext';

const About = () => {
    const { theme } = useThemeContext();

    return (
        <div id={theme} className='app__about app__pading-horizontal'>
            <p className="app__bottom-border app__about--title">About Me</p>

            <p className="app__about--content">Insert Text Here</p>

        </div>
    )
}

export default About