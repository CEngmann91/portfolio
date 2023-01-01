import './Line.scss';
import React from 'react';

interface LineProps {
    className: string;
}
function Line({ className }: LineProps) {

    return (
        <div id='Line' className={className} />
    )
}

export default Line