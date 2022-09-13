import './App.css';
import Navbar from './components/navbar/Navbar';
import { useThemeContext } from './utils/ThemeContext';

function App() {
  const { theme } = useThemeContext();

  return (
    <div id={theme} className="App">
      <Navbar />
    </div>
  );
}

export default App;
