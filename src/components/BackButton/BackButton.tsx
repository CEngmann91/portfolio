import './BackButton.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface iProps {
    children: React.ReactNode;
    className?: string;
}
const BackButton: React.FC<iProps> = ({ children, className, ...props}: iProps) => {
    let navigate = useNavigate();
    
    return (
        <button className={className} onClick={() => navigate(-1)}>{children}</button>
    )
}

export default BackButton