import React,  { useState } from 'react';




const PokemonDetail = ({ pokemon, pokemonList, onBackClick }) => {
  const [displayShiny, setDisplayShiny] = useState(false);
  const handleToggleShiny = () => {
    setDisplayShiny((prevDisplayShiny) => !prevDisplayShiny);
  };
  return (
    <div>
      <h2>{pokemon.name.en}</h2>
      <div>
        <label>Display:</label>
        <button onClick={handleToggleShiny} style={{ marginLeft: '10px' }}>
          {displayShiny ? 'Regular' : 'Shiny'}
        </button>
      </div>
      <img
        src={displayShiny ? pokemon.image_shiny : pokemon.image}
        alt={pokemon.name.en}
        style={{ width: '200px', height: '200px', marginRight: '100px' }}
      />
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
      <p>Evolution Tree:</p>
      <div style={{ marginLeft: '20px' }}>
        <p>Evolved from:</p>
        <ul>
          {Object.entries(pokemon.evolvedFrom).map(([id, niveau]) => (
            <li key={id}>{`${id}: ${niveau}`}</li>
          ))}
        </ul>
      </div>

      <div style={{ marginLeft: '20px' }}>
        <p>Evolved to:</p>
        <ul>
          {Object.entries(pokemon.evolvesTo).map(([id, niveau]) => (
            <li key={id}>{`${id}: ${niveau}`}</li>
          ))}
        </ul>
      </div>
      <button onClick={onBackClick} style={{ fontSize: '20px', padding: '10px' }} >Back</button>
    </div>
  );
};

export default PokemonDetail;
