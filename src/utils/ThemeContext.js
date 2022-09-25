import React, { useContext, createContext, useState, useLayoutEffect } from 'react'
import { MODE } from './constants';

const ThemeContext = createContext();

const ThemeProvider = React.memo(({ children }) => {
    const [theme, setTheme] = useState(MODE);


    const toggleTheme = () => {
        setTheme((current) => (current === 'light' ? 'dark' : 'light'));
        window.localStorage.setItem("theme", (theme === 'light' ? 'dark' : 'light'));

        // console.log("toggleTheme():: theme - ", theme);
    }

    useLayoutEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setTheme(localTheme);

        // console.log("useLayoutEffect():: localTheme - ", localTheme);
    }, []);

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