import React from 'react'
import './Footer.scss';
import { Twitter, Facebook, Linkedin } from '../../utils/icons';
import { NAVIGATION } from '../../constants/constants';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {

  return (
    <div className='app__footer'>
      {/* Footer */}


      <div className='app__footer--contents'>
        <div className='quick-links'>
          <p className='title'>Quick Links</p>

          <ul className="page-links">
            {NAVIGATION.ROUTE.map(({ id, title, to }) =>
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

          <ul>
            <li>
              <a className='links-icon'><Facebook /></a>
              <a className='links-icon'><Twitter /></a>
              <a className='links-icon'><Linkedin /></a>
            </li>
          </ul>
        </div>
      </div>

      <div className='app__footer--baseline'>
        <div className='line' />

        <div className='container'>
          <p className='copyright'>Copyright &copy; 2022 All Rights Reserved by
            <a href="#"> Christian Engmann</a>.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Footer