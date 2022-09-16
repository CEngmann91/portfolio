import React from 'react'
import './Footer.scss';
import { Twitter, Facebook, Linkedin } from '../../utils/icons';

const Footer = () => {
  return (
    <div className='app__footer'>
      {/* Footer */}


      <div className='app__footer--contents'>

        <div className='socials'>
          <p className='title'>Socials</p>
          {/* <p>Insert Text here</p> */}
          <div className='links'>
            <div className='links-icon'><Facebook /></div>
            <div className='links-icon'><Twitter /></div>
            <div className='links-icon'><Linkedin /></div>
          </div>
        </div>



        <div className='categories'>
          <p className='title'>Categories</p>
          <p className='content'>
            Insert Text here
          </p>
        </div>

        <div className='quick-links'>
          <p className='title'>Quick Links</p>
          <p className='content'>
            Insert Text here
          </p>
        </div>
      </div>

      <div className='app__footer--baseline'>
        <div className='line' />

        <div className='container'>
          <p className='copyright'>Copyright © 2022 All Rights Are Reserved by Christian Engmann</p>

          {/* <div className='links'>
            <div className='links-icon'><Facebook /></div>
            <div className='links-icon'><Twitter /></div>
            <div className='links-icon'><Linkedin /></div>
          </div> */}

        </div>
      </div>



    </div>
  )
}

export default Footer