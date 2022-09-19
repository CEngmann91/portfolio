import React, { useLayoutEffect } from 'react';

import './App.scss';
import { useLocation, Routes, Route } from 'react-router-dom';
import { useThemeContext } from './utils/ThemeContext';
import { NotFound, Landing, About, Projects, Skills, Footer } from './pages';
import { Navbar, FloatingButton } from './components';
import images from './utils/images';

function App() {
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
        width: 50,
        height: 50,
        marginRight: '15px',
        marginBottom: '15px',
      }}
      className='app__theme-button'
      onPress={() => toggleTheme()}
    >
      <img src={theme !== 'light' ? images.Sun_Light : images.Moon_Dark} alt=""
        style={{
          width: '50%',
          height: '50%'
        }} />
    </FloatingButton>
  );

  const RenderRoute = (component) => (
    <>
      <Navbar />
      {component}
      <Footer />


      {RenderFloatingButton()}
    </>
  );

  return (
    <div id={theme}>

      <Routes>
        {/* Use it in this way, and it should work: */}
        <Route path='*' element={<NotFound />} />

        <Route exact path="/" element={
          <>
            <Navbar />
            <Landing />
            <About />
            <Skills />
            <Projects />
            <Footer />

            { RenderFloatingButton() }
          </>
        } />
        <Route exact path="/about" element={RenderRoute(<About />)} />
        <Route exact path="/projects" element={RenderRoute(<Projects />)} />
        <Route exact path="/skills" element={RenderRoute(<Skills />)} />
        {/* <Route exact path="/contact" element={RenderRoute(<Contact />)} /> */}




        {/* <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/footer" element={<Footer />} /> */}

      </Routes>
    </div>
  );
}

export default App;