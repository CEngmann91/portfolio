import './TextArea.scss';
import React from 'react';

const TextArea = ({ useRef, placeholder, icon, className, ...props }) => {
    return (
        <div>
            <textarea {...props} ref={useRef} className="textarea" />
            <label>{placeholder}</label>
            {icon && <span className='textarea-icon'>{icon}</span>}
        </div>
    )
}

export default TextArea