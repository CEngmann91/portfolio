import './Projects.scss';
import React from 'react'
import { useThemeContext } from '../../utils/ThemeContext';

const Projects = () => {
  const { theme } = useThemeContext();

  const list = [
    { title: "title1", imgSrc: "imgSrc1" },
    { title: "title2", imgSrc: "imgSrc2" },
    { title: "title3", imgSrc: "imgSrc3" },
  ]

  return (
    <div id={theme} className='app__projects app__pading-horizontal'>
      <p className="app__bottom-border app__projects--title">Projects</p>

      {/* <p className="app__projects--content">Insert Text Here</p> */}
      <div className='list'>
        {list.map((item, index) =>
          <div className='list--item' key={index}>
            <p>{item.title}</p>
            <p>{item.imgSrc}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects