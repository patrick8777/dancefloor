import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid/index.jsx';

function App() {
  const [count, setCount] = useState(0);

  const handleColorChange = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <button onClick={handleColorChange}>Change All Colors</button>
      <Grid count={count} />
    </>
  );
}

export default App;