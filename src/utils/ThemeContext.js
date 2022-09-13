import React, { useContext, createContext, useState } from 'react'
import { MODE } from './constants';

const ThemeContext = createContext();

const ThemeProvider = React.memo(({ children }) => {
    const [theme, setTheme] = useState(MODE);


    const toggleTheme = () => {
        setTheme((current) => (current === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
});
export { ThemeProvider, ThemeContext }


const useThemeContext = () => {
    return useContext(ThemeContext);
}
export { useThemeContext }