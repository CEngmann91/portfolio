import React from 'react'

const TextArea = () => {
    
  return (
    <div>TextArea</div>
    
  )
}

export default TextArea;







/*import './TextArea.scss';
import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: any;
    useRef: any;
    placeholder?: string | number;
    icon: React.ReactNode;
    className: string;
}

const TextArea: React.forwardRef<HTMLInputElement, InputProps>(({ placeholder, icon, className, ...props }: ref) => {
    return (
        <div>
            <textarea {...props} ref={ref} className="textarea" />
            <label>{placeholder}</label>
            {icon && <span className='textarea-icon'>{icon}</span>}
        </div>
    )
})

export default TextArea;
*/