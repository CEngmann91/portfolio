import './Skills.scss';
import React from 'react'
import { useThemeContext } from '../../utils/ThemeContext';

const Skills = () => {
  const { theme } = useThemeContext();
  const techs = [
    "React", "Redux", "Firebase", "Git", "Figma", "NodeJS", "Typescript", "Javascript", "C#", "CSS/SCSS"
  ]

  return (
    <div id={theme} className='app__skills app__pading-horizontal'>
      <p className="app__bottom-border app__skills--title">Skills</p>

      <p className='app__skills--content'>Here are some of the technologies that I have been working with:</p>
      <div className='skill-list'>
        {techs.map((item, index) =>
          <div className='skill-list--item' key={index}>
            <h4>{item}</h4>
          </div>
        )}
      </div>
    </div>
  )
}

export default Skills