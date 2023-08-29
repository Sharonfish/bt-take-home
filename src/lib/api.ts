export interface Pokemon {
  height: number,
  name: string,
  weight: number,
  sprites: {
    front_default: string
  }
}

export interface PaginatedPokemonList {
  count: number,
  next: string | null,
  results: [
    {
      name: string,
      url: string
    }
  ]
}

// TODO: Fetch the PokeAPI for a single Pokemon
export const fetchPokemon = async (name: string) => {

  // I've given you a quick hint on type casting the response.
  // const pokemon: Pokemon = await response.json();

  // Remove this line!
  return name;
};

// TODO: Fetch the PokeAPI for a list of Pokemon
export const fetchPokemonList = async (limit: number, offset: number) => {
  
  // I've given you a quick hint on type casting the response.
  // const paginatedPokemonList: PaginatedPokemonList = await response.json();

  // To help you, I've already implemented loading individual Pokemon from the paginated response:
  // return await Promise.all(paginatedPokemonList.results.map(({ name }) => fetchPokemon(name))) as Pokemon[];

  // Remove this line!
  return limit + offset;
}