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
            {item.pokemon} Poké Type:({item.type_1}, {item.type_2}) Egg Group:({item.egg_group_1},{' '}
            {item.egg_group_2}) Ability: {item.ability_1}
          </p>
        </div>
      ))}
    </div>
  );
}
