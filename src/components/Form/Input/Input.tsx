import './Input.scss';
import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    icon: string;
    className: string;
    ref: React.RefObject<HTMLInputElement>;
}
const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ placeholder, icon, className, ref, ...props }) => {
    return (
        <>
            <input {...props} ref={ref} type={props.type} />
            <label>{placeholder}</label>
            {icon && <span className='input-icon'>{icon}</span>}
        </>
    );
};

export default React.forwardRef(Input);




/*import './Input.scss';
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
*/