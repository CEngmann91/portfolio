import React from 'react'
import { useThemeContext } from '../../utils/providers/ThemeProvider';
import './Landing.scss';

const Landing: React.FC = () => {
    const { theme } = useThemeContext();

    return (
        <div id={theme} className='app__landing app__pading-horizontal'>
            <p className='app__landing--hi'>Hi, I'm</p>
            <h1 className='app__landing--name'><span>Christian Engmann</span></h1>

            <div className="app__landing--tags">
                <span className="app__bottom-border app__landing--tags-tag">Computer Scientist</span>
                <span className="app__bottom-border app__landing--tags-tag">Designer</span>
                <span className="app__bottom-border app__landing--tags-tag">Full Stack Developer</span>
                <span className="app__bottom-border app__landing--tags-tag">Engineer</span>
            </div>
            
            <div className='scroll-down-text'>
                <p>Scroll Down</p>
                <p className='arrowhead'>{'\u25BC'}</p>
            </div>
        </div>
    )
}

export default Landing