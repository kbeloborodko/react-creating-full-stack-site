import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <h1>My Blog</h1>
      </header>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
