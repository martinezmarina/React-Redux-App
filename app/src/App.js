import React from 'react';
import './App.css';

import RandomCat from './components/RandomCat'
import RandomDog from './components/RandomDog'

export default function App() {
  return (
    <div className="App">
      <h1>Browse Animal Pictures!</h1>
      <h3>Created By Marina to Waste Your Time</h3>
      <div className="content">
      <RandomCat />
      <RandomDog />
      </div>
    </div>
  );
}

