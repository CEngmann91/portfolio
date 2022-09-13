import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useThemeContext } from './utils/ThemeContext';
import Navbar from './components/navbar/Navbar';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Footer from './pages/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';


function App() {
  const { theme } = useThemeContext();

  return (
    <Router
      // id={theme}
      >
      <Navbar />

      <Routes>

        {/* Use it in this way, and it should work: */}
        <Route path='*' element={<NotFound />} />

        <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/footer" element={<Footer />} />
        
      </Routes>
    </Router>
  );
}

export default App;
