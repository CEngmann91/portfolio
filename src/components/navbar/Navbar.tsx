import React, { useState, useEffect } from 'react'
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { LINKS, NAVIGATION } from '../../constants/constants';
import { ContactModal } from '../Modals';
import NavbarItem from './NavbarItem/NavbarItem';
// import { Menu } from '../../utils/icons';
import { ALink, Drawer } from '../../components';
import { useThemeContext } from '../../utils/providers/ThemeProvider';
import { useScroller } from '../../helpers/hooks/useScroller';

const Navbar: React.FC = () => {
    const { theme } = useThemeContext();
    const scrolledDown = useScroller();
    const [currentRoute, setCurrentRoute] = useState(NAVIGATION.ROUTE[0]);
    const [resumeVisible, setResumeVisible] = useState(false);
    const [contactModelOpen, setContactModelOpen] = useState(false);



    return (
        <nav id={theme} className={`app__navbar ${scrolledDown ? 'app__navbar--scroll' : ''}`}>
            <div className='app__navbar--logo'>
                <a id={theme} href='#home' className='app__hover--colour-fade'>CE;</a>
            </div>

            <ul className='app__navbar--links'>
                {NAVIGATION.ROUTE.map(({ id, title, to }, index) => (
                    <li className='app__flex p-text' key={`link-${index}`}>
                        <a href={`#${to}`} className={`app__hover-colour-fade app__underline-anim ${currentRoute.to === to ? "current-tab" : ""}`} onClick={() => setCurrentRoute(NAVIGATION.ROUTE[index])}>{title}</a>
                    </li>
                ))}
            </ul>

            {/* <ul className="app__navbar--links">
                {NAVBAR.MENU_DATA.map(({ id, title, to }) =>
                    <li key={id}>
                        <NavbarItem
                            key={id} id={id}
                            to={to} onClick={() => { }}
                            idleClassName="" activeClassName="app__navbar--links-active"
                        >{title}</NavbarItem>
                    </li>
                )}
            </ul> */}


            {/* <p className='app__navbar--contact-me-button app__hide-smaller-device' onClick={() => setContactModelOpen(true)} data-back="Back" data-front="Front">
                Say Hello
            </p> */}

            <div onAnimationEnd={() => setResumeVisible(true)} className={`${resumeVisible && 'anim-bouncy'}`}>
                <ALink path={LINKS.RESUME} className='app__navbar--resume app__hover-with-shadow'>{".résumé();"}</ALink>
            </div>


            <Drawer />

            <ContactModal shown={contactModelOpen} onClose={() => setContactModelOpen(false)} />
        </nav>
    )
}

export default Navbar