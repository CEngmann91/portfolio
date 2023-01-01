import React from 'react'
import { DownArrow } from '../../utils/icons';
import './Landing.scss';

const Landing: React.FC = () => {
  const tags = ['Computer Scientist', 'Freelancer', 'Web & Mobile Developer', 'Designer', 'And Finally...A Comedian']


  return (
    <div id='home' className='app__landing app__flex app__pad-hor'>
      <p className='app__landing--hi'>Hi, my name is</p>
      <h1 className='head-text app__landing--myName'><span>Christian Engmann</span></h1>

      <div className='app__landing--badge'>
        {tags.map((text, index) => (
          <div className="tag-cmp app__flex app__hover-with-shadow" key={index}>
            <p className="p-text">{text}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          position: 'absolute',
          justifyContent: 'center', alignItems: 'center',
          width: '100%',
          bottom: 10, left: 0,
          // background: 'red',
        }}>
        {/* <MagicMouse /> */}

        <div className="app__landing--scroll-arrow anim--bounce-arrow">
          <DownArrow />
        </div>
      </div>

    </div>
  )
}

export default Landing