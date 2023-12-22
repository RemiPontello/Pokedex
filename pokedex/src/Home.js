// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [generationFilter, setGenerationFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokedex-api.3rgo.tech/api/pokemon');
        const data = await response.json();
        console.log(data)
        setPokemonList(data.data);
        setFilteredPokemonList(data.data);  // Assuming initial filtered list is the same as the full list
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  const filterPokemonList = () => {
    // Implement filtering logic based on generationFilter and typeFilter
    let filteredList = [...pokemonList];
      // Filter by Generation
    if (generationFilter !== 'All') {
      filteredList = filteredList.filter(pokemon => pokemon.generation === generationFilter);
    }
      // Filter by Type
    if (typeFilter !== 'All') {
      filteredList = filteredList.filter(pokemon => pokemon.types.includes(typeFilter));
    }
      // Update the filtered list state
    setFilteredPokemonList(filteredList);
  };
  const sortPokemonList = () => {
    // Make a copy of the filtered Pokemon list
    let sortedList = [...filteredPokemonList];
  
    // Implement sorting logic based on sortOrder
    switch (sortOrder) {
      case 'asc':
        sortedList.sort((a, b) => comparePokemon(a, b));
        break;
      case 'desc':
        sortedList.sort((a, b) => comparePokemon(b, a));
        break;
      default:
        // No sorting (maintain the existing order)
        break;
    }
  
    // Update the sorted list state
    setFilteredPokemonList(sortedList);
  };
  
  const comparePokemon = (pokemonA, pokemonB) => {
    // Implement comparison logic based on the property you want to sort by
    // Example: Sorting by Pokemon name alphabetically
    const nameA = pokemonA.name.toUpperCase();
    const nameB = pokemonB.name.toUpperCase();
  
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  };
  

  const handleGenerationChange = (event) => {
    const selectedGeneration = event.target.value;
  
    // Update generationFilter state
    setGenerationFilter(selectedGeneration);
  
    // Filter the list based on the selected generation
    const updatedList = pokemonList.filter(pokemon => {
      return selectedGeneration === 'All' || pokemon.generation === selectedGeneration;
    });
  
    // Update the filtered list state
    setFilteredPokemonList(updatedList);
  };
  

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
  
    // Update typeFilter state
    setTypeFilter(selectedType);
  
    // Filter the list based on the selected type
    const updatedList = pokemonList.filter(pokemon => {
      return selectedType === 'All' || pokemon.types.includes(selectedType);
    });
  
    // Update the filtered list state
    setFilteredPokemonList(updatedList);
  };
  

  const handleSortChange = (event) => {
    const selectedSortOrder = event.target.value;
  
    // Update sortOrder state
    setSortOrder(selectedSortOrder);
  
    // Sort the list based on the selected sorting order
    sortPokemonList();
  };
  

  const handleSearchChange = (event) => {
    const enteredSearchTerm = event.target.value.toLowerCase();
  
    // Update searchTerm state
    setSearchTerm(enteredSearchTerm);
  
    // Filter the list based on the entered search term
    const updatedList = pokemonList.filter(pokemon => {
      // Check if the Pokemon name contains the entered search term
      return pokemon.name.toLowerCase().includes(enteredSearchTerm);
    });
  
    // Update the filtered list state
    setFilteredPokemonList(updatedList);
  };
  

  return (
    <div>
      <h1>Pokedex</h1>
      {/* Filters */}
      {/* Sorting */}
      {/* Search */}
      {/* Pokemon List */}
      <ul>
        {filteredPokemonList.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.id}`}>
              <img src={pokemon.image} alt={pokemon.name['en']} />
              {pokemon.number} - {pokemon.name['en']}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
