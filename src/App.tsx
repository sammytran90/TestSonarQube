import React from 'react';
import './App.css';
import HomePage from './pages/homepage';
import Header from './components/Header';

const RandomComp = () => {
  const unUsedVar = "unUsedVar";

  return (<div>
    RandomComp
  </div>)
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
      <RandomComp />
    </div>
  );
}

export default App;
