import './Page.scss';
import React from 'react';
import Line from './Line/Line';

interface iProps {
    id: string;
    className: string;
    pageTitle: string;
    children?: React.ReactNode;
}

const Page: React.FC<iProps> = ({id, className, pageTitle, children, ...props}: iProps) => {
    return (
        <div id={id} className={`app__flex app__pad-hor page ${className}`}>
            <header>
                <Line className="cell" />
                <div className="cell text"><h1 className='head-text'><span>{pageTitle}</span></h1></div>
                <Line className="cell" />
            </header>
            {children}
        </div>
    )
}

export default Page;