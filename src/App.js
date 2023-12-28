import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';
import Filter from './Filter';
import PokemonDetail from './PokemonDetail';
import './App.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [generations, setGenerations] = useState([]);
  const [types, setTypes] = useState([]);
  const [filters, setFilters] = useState({
    generation: '',
    type: '',
  });
  const [sort, setSort] = useState('number');
  const [search, setSearch] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokedex-api.3rgo.tech/api/pokemon');
        const data = response.data.data;
        setPokemonList(data);
        setGenerations([...new Set(data.map((pokemon) => pokemon.generation))]);
        setTypes([...new Set(data.flatMap((pokemon) => pokemon.types))]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filterAndSortPokemon = () => {
    let filteredPokemon = pokemonList;

    if (filters.generation) {
      filteredPokemon = filteredPokemon.filter((pokemon) => pokemon.generation === filters.generation);
    }

    if (filters.type) {
      filteredPokemon = filteredPokemon.filter((pokemon) => pokemon.types.includes(filters.type));
    }

    if (search) {
      filteredPokemon = filteredPokemon.filter((pokemon) =>
        pokemon.name.en.toLowerCase().includes(search.toLowerCase())
      );
    }

    filteredPokemon.sort((a, b) => {
      if (sort === 'number') return a.id - b.id;
      if (sort === 'name') return a.name.en.localeCompare(b.name.en);
      if (sort === 'weight') return a.weight - b.weight;
      if (sort === 'height') return a.height - b.height;
      return 0;
    });

    return filteredPokemon;
  };

  const handleFilterClick = () => {
    const filteredPokemon = filterAndSortPokemon();
    setPokemonList(filteredPokemon);
  };

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleBackClick = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="container">
      <Filter
        generations={generations}
        types={types}
        onFilterChange={(key, value) => setFilters({ ...filters, [key]: value })}
        onSortChange={(value) => setSort(value)}
        onSearchChange={(value) => setSearch(value)}
        onFilterClick={handleFilterClick}
      />
      {selectedPokemon ? (
        <PokemonDetail pokemon={selectedPokemon} onBackClick={handleBackClick}/>
      ) : (
        <PokemonList pokemonList={pokemonList} onPokemonClick={handlePokemonClick} />
      )}
    </div>
  );
};

export default App;
