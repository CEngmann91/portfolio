import './About.scss';
import React from 'react';
import { useThemeContext } from '../../utils/ThemeContext';

const About = () => {
    const { theme } = useThemeContext();

    return (
        <div id={theme} className='app__about app__flex app__pad-hor'>
            About
        </div>
    )
}

export default About