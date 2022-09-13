import React, { useState, useEffect } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { APP_NAME, NAVBAR } from '../../utils/constants';
import { useThemeContext } from '../../utils/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useThemeContext();
    const [scrolledDown, setScrolledDown] = useState(false);
    const [resumeVisible, setResumeVisible] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false)


    useEffect(() => {
        setTimeout(() => setResumeVisible(true), 1000)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onScroll = () => {
        setScrolledDown((window.scrollY > 100))
    }

    return (
        <nav id={theme} className={`navbar-nav ${scrolledDown ? 'navbar-nav--scroll' : ''}`}>
        {/* <nav id={theme} className='navbar-nav'> */}
            <div className='navbar-wrapper'>
                <NavLink className='ce-title-circle' to="/">
                    <label className='title'>CE</label>
                </NavLink>
            </div>

            <ul className={menuIsOpen ? "navbar-links show-nav" : "navbar-links"}>
                {NAVBAR.MENU_DATA.map(({ title, to }, index) =>
                    <li>
                        <NavLink to={to} key={index}>{title}</NavLink>
                    </li>
                )}
            </ul>

            <button className='navbar-temp-mode-toggle' onClick={toggleTheme}>{theme}</button>
        </nav>
    )
}

export default Navbar