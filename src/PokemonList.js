import React from 'react';
//import PokemonDetail from './PokemonDetail';

const PokemonList = ({ pokemonList, onPokemonClick }) => {
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <div
          key={pokemon.id}
          style={{ border: '1px solid #ddd', padding: '10px', margin: '5px', cursor: 'pointer' }}
          onClick={() => onPokemonClick(pokemon)}
        >
          <img src={pokemon.image} alt={pokemon.name.en} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          {pokemon.name.en}
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
