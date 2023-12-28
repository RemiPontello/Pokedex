// PokemonDetail.js
import React from 'react';

const PokemonDetail = ({ pokemon, onBackClick }) => {
  return (
    <div>
      <h2>{pokemon.name.en}</h2>
      <img src={pokemon.image} alt={pokemon.name.en} style={{ width: '200px', height: '200px', marginRight: '100px' }}></img>
      <p>ID: {pokemon.id}</p>
      <p>Name: {pokemon.name.en}</p>
      <p>Generation: {pokemon.generation} </p>
      <p>Types: {pokemon.types.join(', ')}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Statistics:</p>
      <ul>
        {Object.entries(pokemon.stats).map(([statName, statValue]) => (
          <li key={statName}>{`${statName}: ${statValue}`}</li>
        ))}
      </ul>
      <button onClick={onBackClick} style={{ fontSize: '20px', padding: '10px' }} >Back</button>
      
    </div>
  );
};

export default PokemonDetail;
