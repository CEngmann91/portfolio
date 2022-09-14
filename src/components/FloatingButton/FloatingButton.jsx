import React, { useCallback } from 'react';
import './FloatingButton.scss';

function FloatingButton({ children, style, className, onPress }) {
    const handlePress = useCallback(()=> { if (onPress) onPress() }, [onPress])

    return (
        <div className={'float-button-content hover-zoom ' + className} style={style} onClick={handlePress}>
            {children} 
        </div>
    );
}

export default FloatingButton;