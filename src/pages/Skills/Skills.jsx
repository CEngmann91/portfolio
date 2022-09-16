import './Skills.scss';
import React from 'react'
import { useThemeContext } from '../../utils/ThemeContext';

const Skills = () => {
  const { theme } = useThemeContext();

  return (
    <div id={theme} className='app__skills app__pading-horizontal'>
      <p className="app__bottom-border app__skills--title">Skills</p>

      <p className="app__skills--content">Insert Text Here</p>
    </div>
  )
}

export default Skills