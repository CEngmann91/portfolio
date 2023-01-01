import './res/styles.scss';
import React, { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useThemeContext } from './providers/ThemeProvider';
import { IntroScreen, Landing, About, Projects, Skills } from './pages';
import { Navbar, Footer, FloatingButton, Joke, HeartFeltMessage } from './components';
import { Widgets_Settings, Widgets_SocialMedia } from './components/Widgets';
import images from './utils/images';

export const App = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useThemeContext();
  const [loading, setLoading] = useState(true)


  
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);



  // const RenderFloatingButton = () => (
  //   <FloatingButton
  //     style={{
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       width: 50, height: 50,
  //       marginRight: '15px', marginBottom: '15px',
  //     }}
  //     className='app__theme-button'
  //     onPress={() => toggleTheme()}
  //   >
  //     <img src={theme !== 'light' ? images.Sun_Light : images.Moon_Dark} alt="" style={{ width: '50%', height: '50%' }} />
  //   </FloatingButton>
  // );



  return (
    loading ?
      <IntroScreen setIsLoading={setLoading} />
      :
      <div id={theme} className='app__flex'>
        <Navbar />
        <Landing />
        <Joke />
        <About />
        <Skills />
        <HeartFeltMessage />
        <Projects />
        <Footer />


        <Widgets_SocialMedia />
        <Widgets_Settings />
      </div>
  );
}

export default App;