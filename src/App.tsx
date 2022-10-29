import './App.scss';
import React, { ReactNode, useLayoutEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { NotFound, Landing, About, Projects, Skills, Footer } from './pages';
import { Navbar, FloatingButton } from './components';
import images from './utils/images';
import { useThemeContext } from './utils/providers/ThemeProvider';

export const App = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useThemeContext();


  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  

  const RenderRoute = (component : ReactNode) => (
    <>
      <Navbar />
      {component}
      <Footer />

      {/* {RenderFloatingButton()} */}
    </>
  );

  return (
    <div> 
    {/* <div id={theme}> */}

      <Routes>
        {/* Use it in this way, and it should work: */}
        <Route path='*' element={<NotFound />} />

        <Route path="/" element={
          RenderRoute(
            <>
              <Landing />
              <About />
              <Skills />
              <Projects />
            </>
          )
        } />
        <Route path="/about" element={RenderRoute(<About />)} />
        <Route path="/projects" element={RenderRoute(<Projects />)} />
        <Route path="/skills" element={RenderRoute(<Skills />)} />
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