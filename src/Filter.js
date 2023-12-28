// Filter.js
import React from 'react';

const Filter = ({ generations, types, onFilterChange, onSortChange, onSearchChange, onFilterClick }) => {
  return (
    <div>
      <label>Generation:</label>
      <select onChange={(e) => onFilterChange('generation', e.target.value)}>
        <option value="">All</option>
        {generations.map((generation) => (
          <option key={generation} value={generation}>
            {generation}
          </option>
        ))}
      </select>

      <label>Type:</label>
      <select onChange={(e) => onFilterChange('type', e.target.value)}>
        <option value="">All</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <label>Sort By:</label>
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="number">Number</option>
        <option value="name">Alphabetic</option>
        <option value="weight">Weight</option>
        <option value="height">Height</option>
      </select>

      <label>Search:</label>
      <input type="text" onChange={(e) => onSearchChange(e.target.value)} />

      <button onClick={onFilterClick}>Filter</button>
    </div>
  );
};

export default Filter;
