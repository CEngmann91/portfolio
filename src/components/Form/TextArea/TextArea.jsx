import './TextArea.scss';
import React from 'react';

const TextArea = ({ placeholder, icon, className, ...props }) => {
    return (
        <div>
            <textarea {...props} className="textarea" />
            <label>{placeholder}</label>
            {icon && <span className='icon'>{icon}</span>}
        </div>
    )
}

export default TextArea