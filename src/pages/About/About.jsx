import './About.scss';
import React from 'react';
import { useThemeContext } from '../../utils/ThemeContext';

const About = () => {
    const { theme } = useThemeContext();

    return (
        <div id={theme} className='app__about app__pading-horizontal'>
            <p className="app__bottom-border app__about--title">About Me</p>

            {/* <p className='app__about--content'>Hello! My name is Christian, I am a web developer who is passionate about everything code related.</p>
            <p className='app__about--content'>My inspiration comes from knowing that my growth over the years has lead me to be the person I am today. To put simply, I love to learn and improve my existing knowledge and this project is a great demonstration of that.</p>
            <p className='app__about--content'>I am currently looking for an opportunity to work with a Javascript framework. Ultimately, I aim to find a position that allows me to use new technologies.</p> */}

            <p className='app__about--content'>Hello! My name is Christian, a highly intuative Full Stack Developer with a Computer Science degree who enjoys everything tech related.</p>
            <p className='app__about--content'>A well-rounded IT professional with many years of computing experience, possessing expert knowledge of the software development lifecycle, a solid understanding of technologies required to go from development to deployment and not to mention scalable applications.</p>
        </div>
    )
}

export default About