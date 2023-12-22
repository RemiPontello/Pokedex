// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/pokemon/:pokemonId" element={<PokemonDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
