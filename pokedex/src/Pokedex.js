// src/Pokedex.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokedex-api.3rgo.tech/api/pokemon');
        setPokemonList(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Pokédex</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {pokemonList.map((pokemon) => (
            <li key={pokemon.id}>
              <strong>{pokemon.name && pokemon.name.en}</strong> ({pokemon.name && pokemon.name.fr})
              <br />
              <img src={pokemon.image} alt={pokemon.name && pokemon.name.en} />
              <br />
              Height: {pokemon.height} m, Weight: {pokemon.weight} kg
              <br />
              Types: {pokemon.types && pokemon.types.map((type) => <span key={type}>{type} </span>)}
              <br />
              Stats:
              <ul>
                {pokemon.stats &&
                  Object.entries(pokemon.stats).map(([stat, value]) => (
                    <li key={stat}>{stat}: {value}</li>
                  ))
                }
              </ul>
              Evolves from: {Array.isArray(pokemon.evolvedFrom) ? (
                pokemon.evolvedFrom.map((evolution) => (
                  <span key={evolution.id}>{evolution.name} ({evolution.trigger}) </span>
                ))
              ) : (
                <span>{pokemon.evolvedFrom.name} ({pokemon.evolvedFrom.trigger}) </span>
              )}
              <br />
              Evolves to:
              <ul>
                {pokemon.evolvesTo &&
                  Object.entries(pokemon.evolvesTo).map(([id, trigger]) => (
                    <li key={id}>{id}: {trigger}</li>
                  ))
                }
              </ul>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Pokedex;

