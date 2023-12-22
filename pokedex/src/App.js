// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokemon/:pokemonId" component={PokemonDetails} />
      </Switch>
    </Router>
  );
}

export default App;
