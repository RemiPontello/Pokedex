import React,  { useState } from 'react';
import './Details.css';
import './App.css';



const PokemonDetail = ({ pokemon, pokemonList, onBackClick }) => {
  const [displayShiny, setDisplayShiny] = useState(false);
  const handleToggleShiny = () => {
    setDisplayShiny((prevDisplayShiny) => !prevDisplayShiny);
  };
  return (
    <div>
      <h2>{pokemon.name.en}</h2>
      <div>
        <label>Display: </label>
        <button onClick={handleToggleShiny} className='shinybutton'>
          {displayShiny ? 'Regular' : 'Shiny'}
        </button>
      </div>
      <img
        src={displayShiny ? pokemon.image_shiny : pokemon.image}
        alt={pokemon.name.en}
        style={{ width: '200px', height: '200px', marginRight: '100px' }}
      />
      <div className='info'>
      <p>ID: #{pokemon.id}</p><br></br>
      <p>Name: {pokemon.name.en}</p>
      <p>Generation: {pokemon.generation} </p>
      <p>Types: {pokemon.types.join(', ')}</p>
      <p>Height: {pokemon.height} m</p>
      <p>Weight: {pokemon.weight} kg</p>
      </div>
      <div className='stats'>
      <p>Statistics:</p>
        {Object.entries(pokemon.stats).map(([statName, statValue]) => (
          <li key={statName}>{`${statName}: ${statValue}`}</li>
        ))}
      </div>
      <div className='tree'>
      <p>Evolution Tree:</p>
      <div style={{ marginLeft: '20px' }}>
        <p>Evolved from:</p>
        
          {Object.entries(pokemon.evolvedFrom).map(([id, niveau,]) => (
            <li key={id}>#{`${id}: ${niveau}`}</li>
          ))}
        
      </div>

      <div style={{ marginLeft: '20px' }}>
        <p>Evolved to:</p>
        
          {Object.entries(pokemon.evolvesTo).map(([id, niveau]) => (
            <li key={id}>#{`${id}: ${niveau}`}</li>
          ))}
        
      </div>
      </div>
      <button onClick={onBackClick} className='backbutton' >Retour</button>
    </div>
  );
};

export default PokemonDetail;
