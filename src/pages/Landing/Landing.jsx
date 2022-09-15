import React from 'react'
import { useThemeContext } from '../../utils/ThemeContext';
import './Landing.scss';

const Landing = () => {
    const { theme } = useThemeContext();

    return (
        <div id={theme} className='app__landing app__pading-horizontal'>
            <p className='app__landing--hi'>Hi, I'm</p>
            <h1 className='app__landing--name'><span>Christian Engmann</span></h1>


            <div className="app__landing--tags">
                <div className="app__bottom-border app__landing--tags-tag">
                    Designer
                </div>

                <div className="app__bottom-border app__landing--tags-tag">
                    Full Stack Developer
                </div>

                <div className="app__bottom-border app__landing--tags-tag">
                    Engineer
                </div>
            </div>

        </div>
    )
}

export default Landing