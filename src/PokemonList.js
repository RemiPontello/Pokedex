import React from 'react';
import './App.css';
//import PokemonDetail from './PokemonDetail';

const PokemonList = ({ pokemonList, onPokemonClick }) => {
  return (
    <div className='box'>
      {pokemonList.map((pokemon) => (
        <div className='pokebox'
          key={pokemon.id}
          style={{ border: '1px solid #ddd', padding: '10px', margin: '5px', cursor: 'pointer' }}
          onClick={() => onPokemonClick(pokemon)}
        >
          <img className='imgpoke' src={pokemon.image} alt={pokemon.name.en} />
          <div className='namepoke'>{pokemon.name.en}</div>
          <div className='boxtypes'> <p>Type:  </p>{pokemon.types.join(' , ')}</div>
          <div className='genpoke'>{pokemon.generation}</div>
          <div className='idpoke'>#{pokemon.id}</div>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
