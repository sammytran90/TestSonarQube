import React from 'react';
import './App.css';
import HomePage from './pages/homepage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
