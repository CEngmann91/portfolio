import './BackButton.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ className, children }) => {
    let navigate = useNavigate();

    return (
        <button className={className} onClick={() => navigate(-1)}>{children}</button>
    )
}

export default BackButton