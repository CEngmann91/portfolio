import './Contact.scss';
import React from 'react'
import { useThemeContext } from '../../utils/ThemeContext';

const Contact = () => {
    const { theme } = useThemeContext();

    return (
        <div id={theme} className='app__contact app__flex'>
            Contact
        </div>
    )
}

export default Contact