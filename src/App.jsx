import { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './style.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((currState) => !currState);
  };
  return (
    <div className='container'>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Main darkMode={darkMode} />
    </div>
  );
};

export default App;
