import { useState, useEffect } from 'react';
import { fetchPokemon } from '../services/FetchPokemon';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {pokemon.map((item) => (
        <div key={item.id}>
          <p>
            {item.pokemon} ({item.type_1}, {item.type_2})
          </p>
        </div>
      ))}
    </div>
  );
}
