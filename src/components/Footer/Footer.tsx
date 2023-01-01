import React from 'react'
import './Footer.scss';
import { Twitter, Facebook, Linkedin } from '../../utils/icons';
import { NAVIGATION } from '../../constants/constants';
import { NavLink } from 'react-router-dom';
import { useDate } from '../../helpers/hooks/useDate';


export interface iSocial {
  id: number;
  title: string;
  content: React.ReactNode;
}

const socials: iSocial[] = [
  {
    id: 0,
    title: 'Linkedin',
    content: <Linkedin />
  },
  {
    id: 1,
    title: 'Facebook',
    content: <Facebook />
  },
  {
    id: 2,
    title: 'Twitter',
    content: <Twitter />
  }
]
const Footer: React.FC = () => {
  const { fullYear } = useDate();





  const renderSocials = () => (
    <div className='socials'>
      <p className='title'>Socials</p>

      <ul>
        <li>
          {socials.map(({ id, title, content }) =>
            <a className='links-icon' key={id}>{content}</a>
          )}
        </li>
      </ul>
    </div>
  )


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


        {renderSocials()}
      </div>

      <div className='app__footer--baseline'>
        <div className='line' />

        <div className='container'>
          <p className='copyright'>Copyright &copy; {fullYear} All Rights Reserved by
            <a href="#">...well...Me</a>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Footer