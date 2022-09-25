import './Projects.scss';
import React from 'react'
import { useThemeContext } from '../../utils/ThemeContext';

const Projects = () => {
  const { theme } = useThemeContext();

  const list = [
    { id: 0, title: "title1", imgSrc: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=527&q=100" },
    { id: 1, title: "title2", imgSrc: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=527&q=100" },
    { id: 2, title: "title3", imgSrc: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=527&q=100" },
    { id: 3, title: "title4", imgSrc: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=527&q=100" },
    { id: 4, title: "title5", imgSrc: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=527&q=100" },
    { id: 5, title: "title6", imgSrc: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=527&q=100" },
    { id: 6, title: "title7", imgSrc: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=527&q=100" },
    { id: 7, title: "title8", imgSrc: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=527&q=100" },
  ]

  return (
    <div id={theme} className='app__projects app__pading-horizontal'>
      <p className="app__bottom-border app__projects--title">Projects</p>

      {/* <p className="app__projects--content">Insert Text Here</p> */}
      <div className='list'>
        {list.map(({ id, title, imgSrc }) =>
          <div className='list--item' key={id}>
            <p className='list--item-title'>{title}</p>
            <div className='list--item-img'>
              <img src={imgSrc} alt={title} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects