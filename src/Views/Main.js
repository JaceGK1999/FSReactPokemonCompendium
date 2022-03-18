import { useState, useEffect } from 'react';
import { fetchPokemon, fetchTypes } from '../services/FetchPokemon';
import { TypeSearch } from '../components/Search/TypeSearch';
import { fetchFilteredPokemon } from '../services/FetchFilteredPokemon';
import SearchBar from '../components/Search/SearchBar';
import Sorting from '../components/Sort/Sort';
import './main.css';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('asc');
  // const [sortAsc, setSortAsc] = useState('false');
  // const [sortDesc, setSortDesc] = useState('false');
  const asc = '';
  const desc = '';

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

  const handleAscChange = () => {
    setSort(asc);
  };

  const handleDescChange = () => {
    setSort(desc);
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
      <div>
        <Sorting value={sort === 'asc'} label="Ascending" sortHandle={handleAscChange} />
        <Sorting value={sort === 'desc'} label="Descending" sortHandle={handleDescChange} />
      </div>
      {pokemon.map((item) => (
        <div key={item.id}>
          <p className='poke-card'>
            {item.pokemon} <img className="pokemonImg" src={`${item.url_image}`} /> Poké Type:(
            {item.type_1}, {item.type_2}) Egg Group:(
            {item.egg_group_1}, {item.egg_group_2}) Ability: {item.ability_1}
          </p>
        </div>
      ))}
    </div>
  );
}
