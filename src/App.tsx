import React, { useEffect } from 'react';
import './App.scss';

function App() {
  useEffect(() => {
    document.title = '7x League';
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
