import Navbar from './components/navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useThemeContext } from './utils/ThemeContext';
import { Landing, About, Projects, Skills, Footer } from './pages';

function App() {
  const { theme } = useThemeContext();


  const renderRoutes = (
    <>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/skills" element={<Skills />} />
      <Route exact path="/footer" element={<Footer />} />
      {/* <Route path="/404" component={() => <h1>Not Found!</h1>} /> */}
      {/* <Redirect to="/404" /> */}
    </>
  )

  return (
    <Router id={theme}>
      <Navbar />

      <Routes>
        {/* { renderRoutes() } */}

        <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/footer" element={<Footer />} />
        {/* <Route path="/404" component={() => <h1>Not Found!</h1>} /> */}
        {/* <Redirect to="/404" /> */}

      </Routes>
    </Router>
  );
}

export default App;
