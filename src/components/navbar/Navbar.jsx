import React, { useState, useEffect } from 'react'
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { APP_NAME, NAVBAR } from '../../utils/constants';
import { useThemeContext } from '../../utils/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useThemeContext();
    const [scrolledDown, setScrolledDown] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false)


    useEffect(() => {
        // setTimeout(() => setResumeVisible(true), 1000)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onScroll = () => {
        setScrolledDown((window.scrollY > 100))
    }

    const show = () => {
        // Prevents scrolling whilst the menu is visible.
        document.body.style.overflow = "hidden";
        setMenuIsOpen(true);
    }

    const hide = () => {
        document.body.style.overflow = "scroll";
        setMenuIsOpen(false);
    }

    const toggleVisibility = () => {
        if (!menuIsOpen)
            show();
        else
            hide();
    }

    return (
        <nav id={theme} className={`navbar-nav ${scrolledDown ? 'navbar-nav--scroll' : ''}`}>
            <div className='navbar-nav--wrapper'>
                <NavLink className='ce-title-circle' to="/">
                    <label className='title'>CE</label>
                </NavLink>
            </div>

            <ul className="navbar-nav--links">
                {NAVBAR.MENU_DATA.map(({ title, to }, index) =>
                    <li>
                        <NavLink to={to} key={index}>{title}</NavLink>
                    </li>
                )}
            </ul>

            <div className='app__drawer'>
                <div className="app__drawer--menuBtn-container">
                    <button onClick={toggleVisibility}>
                        =
                    </button>
                </div>  

                {menuIsOpen &&
                    <div className='app__drawer--panel'>
                        <h1>Text</h1>
                    </div>
                }
            </div>

        </nav>
    )
}

export default Navbar