import './Skills.scss';
import React from 'react'
import { useThemeContext } from '../../utils/ThemeContext';

const Skills = () => {
  const { theme } = useThemeContext();

  return (
    <div id={theme} className='app__skills app__flex app__pad-hor'>
      Skills
    </div>
  )
}

export default Skills