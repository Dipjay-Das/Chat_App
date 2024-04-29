import React, { useState } from 'react';
import './App.css';
import Iconsbar from './Iconsbar';
import Searchbar from './Searchbar';

function App() {
  const [result, setResult] = useState('');
  const [mode, setMode] = useState(true)
  const toggleMode = () => {
    setMode(!mode);
    console.log("hi")
  };

  return (
    <div className="App">
      <Iconsbar toggleMode={toggleMode} mode={mode} />
      <Searchbar setResult={setResult} result={result} mode={mode}   />
    </div>
  );
}

export default App;
