import './res/styles.scss';
import React, { ReactNode, useLayoutEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { Landing, About, Projects, Skills, Footer } from './pages';
import { Navbar, FloatingButton } from './components';
import { useThemeContext } from './utils/providers/ThemeProvider';

export const App = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useThemeContext();


  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);



  const RenderRoute = (component: ReactNode) => (
    <>
      <Navbar />
      {component}
      <Footer />

      {/* {RenderFloatingButton()} */}
    </>
  );

  return (
    <div id={theme} className='app__flex'>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      {/* <Projects /> */}
    </div>
  );
}

export default App;