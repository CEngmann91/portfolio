import './res/styles.scss';
import React, { ReactNode, useLayoutEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { useThemeContext } from './utils/providers/ThemeProvider';
import { Landing, About, Projects, Skills, Footer } from './pages';
import { Navbar, FloatingButton, Joke, HeartFeltMessage } from './components';
import { Widgets_Settings, Widgets_SocialMedia } from './components/Widgets';
import images from './utils/images';

export const App = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useThemeContext();


  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);



  const RenderFloatingButton = () => (
    <FloatingButton
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50, height: 50,
        marginRight: '15px', marginBottom: '15px',
      }}
      className='app__theme-button'
      onPress={() => toggleTheme()}
    >
      <img src={theme !== 'light' ? images.Sun_Light : images.Moon_Dark} alt="" style={{ width: '50%', height: '50%' }} />
    </FloatingButton>
  );


  // const RenderRoute = (component: ReactNode) => (
  //   <>
  //     <Navbar />
  //     {component}
  //     <Footer />

  //     {/* {RenderFloatingButton()} */}
  //   </>
  // );

  return (
    <div id={theme} className='app__flex'>
      <Navbar />
      <Landing />
      <Joke />
      <About />
      <Skills />
      <HeartFeltMessage />
      <Projects />


      <Widgets_SocialMedia />
      <Widgets_Settings />
      {/* {RenderFloatingButton()} */}
    </div>
  );
}

export default App;