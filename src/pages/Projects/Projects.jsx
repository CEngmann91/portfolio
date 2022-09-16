import './Projects.scss';
import React from 'react'
import { useThemeContext } from '../../utils/ThemeContext';

const Projects = () => {
  const { theme } = useThemeContext();

  return (
    <div id={theme} className='app__projects app__pading-horizontal'>
      <p className="app__bottom-border app__projects--title">Projects</p>

      <p className="app__projects--content">Insert Text Here</p>
    </div>
  )
}

export default Projects