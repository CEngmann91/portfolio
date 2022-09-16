import React, { useState, useEffect, useCallback } from 'react'
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { NAVBAR } from '../../utils/constants';
import { useThemeContext } from '../../utils/ThemeContext';

import { GiHamburgerMenu as Menu } from 'react-icons/gi';

const Navbar = () => {
    const { theme } = useThemeContext();
    const [scrolledDown, setScrolledDown] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false)


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
            </ul>

            <div className='app__drawer'>
                <div className="app__drawer--menuBtn-container">
                    <button onClick={toggleMenu}>
                        <Menu />
                    </button>
                </div>  

                {menuIsOpen &&
                    <div className={`app__drawer--panel ${menuIsOpen && 'app__drawer--show'}`}>
                        <div>
                            {NAVBAR.MENU_DATA.map(({ title, to }, index) =>
                                <NavLink
                                    to={to} onClick={hideMenu} 
                                    className={({ isActive }) => (isActive ? "navbar-nav--links-link-item-active" : "navbar-nav--links-link-item")}
                                >{title}</NavLink>
                            )}
                        </div>
                    </div>
                }
            </div>

        </nav>
    )
}

export default Navbar