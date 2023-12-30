
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';
import Filter from './Filter';
import PokemonDetail from './PokemonDetail';
import './App.css';

const App = () => {
  const [originalPokemonList, setOriginalPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
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
        setOriginalPokemonList(data);
        setFilteredPokemonList(data);
        setGenerations([...new Set(data.map((pokemon) => pokemon.generation))]);
        setTypes([...new Set(data.flatMap((pokemon) => pokemon.types))]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filterAndSortPokemon = () => {
    let filteredPokemon = originalPokemonList;
  
    if (filters.generation) {
      filteredPokemon = filteredPokemon.filter(
        (pokemon) => pokemon.generation.toString() === filters.generation
      );
    }
  
    if (filters.type) {
      const selectedType = parseInt(filters.type, 10);
      filteredPokemon = filteredPokemon.filter((pokemon) =>
        pokemon.types.includes(selectedType)
      );
    }
  
    if (search) {
      filteredPokemon = filteredPokemon.filter((pokemon) =>
        pokemon.name.en.toLowerCase().includes(search.toLowerCase())
      );
    }
  
    filteredPokemon.sort((a, b) => {
      switch (sort) {
        case 'number':
          return a.id - b.id;
        case 'name':
          return a.name.en.localeCompare(b.name.en);
        case 'weight':
          return a.weight - b.weight;
        case 'height':
          return a.height - b.height;
        default:
          return 0;
      }
    });
  
    setFilteredPokemonList([...filteredPokemon]);
  };
  

  
  
  
  const handleFilterClick = () => {
    filterAndSortPokemon();
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
        <PokemonDetail pokemon={selectedPokemon} onBackClick={handleBackClick} />
      ) : (
        <PokemonList pokemonList={filteredPokemonList} onPokemonClick={handlePokemonClick} />
      )}
    </div>
  );
};

export default App;
