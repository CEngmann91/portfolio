import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { useThemeContext } from './utils/ThemeContext';
import Navbar from './components/navbar/Navbar';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Footer from './pages/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';

import FloatingButton from './components/FloatingButton/FloatingButton';
import Moon_Dark from './assets/images/Misc/Moon - Dark.png';
import Sun_Light from './assets/images/Misc/sun.png';
import Contact from './pages/Contact/Contact';

function App() {
  const { theme, toggleTheme } = useThemeContext();


  let styles = {
    floatingBtnStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      height: 50,
      marginRight: '15px',
      marginBottom: '15px',
    },
    floatingBtnImgStyle: {
      width: '50%',
      height: '50%'
    }
  }


  const renderModeIcon = () => {
    if (theme !== 'light')
      return Sun_Light;
    return Moon_Dark;
  }



  return (
    <div id={theme}>
      <Navbar />

      <Routes>
        {/* Use it in this way, and it should work: */}
        <Route path='*' element={<NotFound />} />
        <Route exact path="/" element={
          <>
            <Landing />
            <About />
            <Projects />
            <Skills />
            <Footer />
          </>
        } />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/contacts" element={<Contact />} />
        {/* <Route exact path="/footer" element={<Footer />} /> */}







        {/* <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/footer" element={<Footer />} /> */}

      </Routes>


      <FloatingButton
          style={styles.floatingBtnStyle}
          className='app__theme-button'
          onPress={() => toggleTheme()}
        >
          <img src={ renderModeIcon() } alt="" style={styles.floatingBtnImgStyle} />
        </FloatingButton>
    </div>
  );
}

export default App;
