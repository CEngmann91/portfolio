import './Page.scss';
import React from 'react';

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
                <line className="cell" />
                <div className="cell text"><h1 className='head-text app__underline-anim'><span>{pageTitle}</span></h1></div>
                <line className="cell" />
            </header>
            {children}
        </div>
    )
}

export default Page;