import './NavbarItem.scss';
import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

const NavbarItem = ({ id, to, onClick, children, idleClassName = "link-item", activeClassName = "link-item-active" }) => {

    const handleClick = useCallback(() => onClick(), [])

    return (
        <NavLink
            key={id}
            to={to} onClick={handleClick}
            className={({ isActive }) => (isActive ? activeClassName : idleClassName)}
        >{children}</NavLink>
    )
}

export default NavbarItem