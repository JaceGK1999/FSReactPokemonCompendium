export async function fetchFilteredPokemon(type, search, page, sort) {
  const params = new URLSearchParams();

  params.set('perPage', 10);
  params.set('page', page);
  params.set('sort', sort);

  if (type !== 'all') {
    params.set('type', type);
  }

  if (search) {
    params.set('pokemon', search);
  }

  if (sort) {
    params.set('pokemon', sort);
  }

  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}
