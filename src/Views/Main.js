import { useState, useEffect } from 'react';
import { fetchPokemon, fetchTypes } from '../services/FetchPokemon';
import { TypeSearch } from '../components/Search/TypeSearch';
import { fetchFilteredPokemon } from '../services/FetchFilteredPokemon';
import SearchBar from '../components/Search/SearchBar';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);

      const typesData = await fetchTypes();
      setTypes(['all', ...typesData]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!selectedType) return;
    const fetchData = async () => {
      const data = await fetchFilteredPokemon(selectedType);
      setPokemon(data);
    };
    fetchData();
  }, [selectedType]);

  const searchByName = async () => {
    const dataName = await fetchFilteredPokemon(selectedType, search);
    setPokemon(dataName);
  };

  return (
    <div>
      <TypeSearch
        types={types}
        setSelectedType={setSelectedType}
        selectedType={selectedType}
        callback={searchByName}
      />
      <SearchBar query={search} setQuery={setSearch} callback={searchByName} />
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
