import { FC, ReactNode, useState, useEffect, useContext } from 'react'
import ThemeContext, { Theme } from '../context/ThemeContext';

type Props = {
    children?: ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
        const storagedTheme = localStorage.getItem('theme');
        return (storagedTheme ?? 'light') as Theme;
    });

    useEffect(() => {
        localStorage.setItem('theme', currentTheme);
    }, [currentTheme])

    function toggleTheme() {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;



const useThemeContext = () => {
    return useContext(ThemeContext);
}
export { useThemeContext }