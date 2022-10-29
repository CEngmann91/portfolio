import React, { useCallback } from 'react';
import './FloatingButton.scss';

interface iProps {
    children: React.ReactNode;
    style: React.CSSProperties;
    className?: string;
    onPress: (e?: React.MouseEvent<HTMLElement>) => void;
}
const FloatingButton: React.FC<iProps> = ({ children, style, className, onPress, ...props}: iProps) => {
    const handlePress = useCallback(()=> { if (onPress) onPress() }, [onPress])

    return (
        <div className={'float-button-content hover-zoom ' + className} style={style} onClick={handlePress}>
            {children} 
        </div>
    );
}

export default FloatingButton;