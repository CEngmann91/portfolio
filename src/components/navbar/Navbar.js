import React, { useState } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { APP_NAME, NAVBAR } from '../../utils/constants';
import { useThemeContext } from '../../utils/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useThemeContext();
    const [menuIsOpen, setMenuIsOpen] = useState(false)


    return (
        <nav id={theme} className='navbar-nav'>
            <div className='navbar-center'>
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

            </div>

            {/* <button className='navbar-temp-mode-toggle' onClick={toggleTheme}>Change to {theme} mode</button> */}
        </nav>
    )
}

export default Navbar