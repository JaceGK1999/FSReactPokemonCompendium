export async function fetchFilteredPokemon(type, search, page) {
  const params = new URLSearchParams();

  params.set('perPage', 10);
  params.set('page', page);

  if (type !== 'all') {
    params.set('type', type);
  }

  if (search) {
    params.set('pokemon', search);
  }

  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}
