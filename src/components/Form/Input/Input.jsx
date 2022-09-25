import './Input.scss';
import React from 'react';

const Input = ({ type, useRef, placeholder, icon, className, ...props }) => {
    return (
        <div>
            <input {...props} ref={useRef} type={type} />
            <label>{placeholder}</label>
            {icon && <span className='input-icon'>{icon}</span>}
        </div>
    )
}

export default Input