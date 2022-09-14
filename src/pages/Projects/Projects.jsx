import './Projects.scss';
import React from 'react'
import { useThemeContext } from '../../utils/ThemeContext';

const Projects = () => {
  const { theme } = useThemeContext();

  return (
    <div id={theme} className='app__projects app__flex app__pad-hor'>
      Projects
    </div>
  )
}

export default Projects