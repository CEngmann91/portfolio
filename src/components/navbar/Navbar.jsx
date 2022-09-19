import React, { useState, useEffect } from 'react'
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { NAVBAR } from '../../utils/constants';
import { useThemeContext } from '../../utils/ThemeContext';

import { GiHamburgerMenu as Menu } from 'react-icons/gi';
import ContactModal from '../Modals/ContactModal/ContactModal';

const Navbar = () => {
    const { theme } = useThemeContext();
    const [scrolledDown, setScrolledDown] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [contactModelOpen, setContactModelOpen] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)//, { passive: true })
    }, [])

    const onScroll = () => setScrolledDown((window.scrollY > 100))

    const showMenu = () => {
        // Prevents scrolling whilst the menu is visible.
        document.body.style.overflow = "hidden";
        setMenuIsOpen(true);
    }

    const hideMenu = () => {
        document.body.style.overflow = "scroll";
        setMenuIsOpen(false);
    }

    const toggleMenu = () => !menuIsOpen ? showMenu() : hideMenu()



    return (
        <nav id={theme} className={`navbar-nav ${scrolledDown ? 'navbar-nav--scroll' : ''}`}>
            <div className='navbar-nav--wrapper'>
                <NavLink className='ce-title-circle' to="/">
                    <label className='title'>CE</label>
                </NavLink>
            </div>

            <ul className="navbar-nav--links">
                {NAVBAR.MENU_DATA.map(({ title, to }, index) =>
                    <li key={index}>
                        <NavLink to={to} className={({ isActive }) => (isActive ? "navbar-nav--links-link-item-active" : "navbar-nav--links-link-item")}>{title}</NavLink>
                    </li>
                )}

                {/* <NavLink 
                    className={({ isActive }) => (isActive ? "navbar-nav--links-link-item-active" : "navbar-nav--links-link-item")}
                    onClick={()=> {}}
                >Contact</NavLink> */}

                <p className='navbar-nav--contact-me-button app__hide-smaller-device' onClick={() => setContactModelOpen(true)}>
                    Contact Me
                </p>

            </ul>

            <div className='app__drawer'>
                <div className="app__drawer--menuBtn-container">
                    <button onClick={toggleMenu}>
                        {!menuIsOpen ? <Menu /> : "X"}
                    </button>
                </div>  

                {menuIsOpen &&
                    <div className={`app__drawer--panel ${menuIsOpen && 'app__drawer--show'}`}>
                        <div>
                            {NAVBAR.MENU_DATA.map(({ title, to }, index) =>
                                <NavLink
                                    key={index}
                                    to={to} onClick={hideMenu} 
                                    className={({ isActive }) => (isActive ? "navbar-nav--links-link-item-active" : "navbar-nav--links-link-item")}
                                >{title}</NavLink>
                            )}
                        </div>
                    </div>
                }
            </div>

            <ContactModal isOpen={contactModelOpen} onClose={() => setContactModelOpen(false)} />

        </nav>
    )
}

export default Navbar