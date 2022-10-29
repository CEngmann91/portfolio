import React from 'react'
import './Footer.scss';
import { Twitter, Facebook, Linkedin } from '../../utils/icons';
import { NAVBAR } from '../../constants/constants';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className='app__footer'>
      {/* Footer */}


      <div className='app__footer--contents'>
        <div className='quick-links'>
          <p className='title'>Quick Links</p>

          <ul className="page-links">
            {NAVBAR.MENU_DATA.map(({ id, title, to }) =>
              <li key={id}>
                <NavLink to={to}
                // className={({ isActive }) => (isActive ? "navbar-nav--links-link-item-active" : "navbar-nav--links-link-item")}
                >{title}</NavLink>
              </li>
            )}
          </ul>

        </div>



        <div className='socials'>
          <p className='title'>Socials</p>
          <div className='links'>
            <a className='links-icon'><Facebook /></a>
            <a className='links-icon'><Twitter /></a>
            <a className='links-icon'><Linkedin /></a>
          </div>
        </div>


        {/* <div className='categories'>
          <p className='title'>Categories</p>
          <p className='content'>
            Insert Text here
          </p>
        </div> */}


      </div>

      <div className='app__footer--baseline'>
        <div className='line' />

        <div className='container'>
          <p className='copyright'>Copyright © 2022 All Rights Are Reserved by Christian Engmann</p>

          {/* <div className='socials'>
            <div className='links'>
              <div className='links-icon'><Facebook /></div>
              <div className='links-icon'><Twitter /></div>
              <div className='links-icon'><Linkedin /></div>
            </div>
          </div> */}

        </div>
      </div>



    </footer>
  )
}

export default Footer