import './Input.scss';
import React from 'react';

const Input = ({ type, placeholder, icon, className, ...props }) => {
    return (
        <div>
            <input {...props} type={type} className="input" />
            <label>{placeholder}</label>
            {icon && <span className='icon'>{icon}</span>}
        </div>
    )
}

export default Input