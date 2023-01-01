import React from 'react'

interface iProp {
    path: string;
    className?: string;
    children?: React.ReactNode;
}
const ALink: React.FC<iProp> = ({ children, path, className, ...props}: iProp) => {
  return (
    <a  href={path}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
    >
        {children}
    </a>
  )
}

export default ALink