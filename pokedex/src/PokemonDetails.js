// PokemonDetails.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    // Fetch individual Pokemon details based on pokemonId
  }, [pokemonId]);

  return (
    <div>
      <h1>Pokemon Details</h1>
      {pokemonDetails ? (
        <div>
          {/* Display Pokemon details */}
          <Link to="/">Back to List</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonDetails;
