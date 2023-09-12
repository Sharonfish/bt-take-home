import { Pokemon, PaginatedPokemonList } from '../types/Pokemon.type';

const BASE_URL:string = 'https://pokeapi.co/api/v2';

// TODO: Fetch the PokeAPI for a single Pokemon
export const fetchPokemon = async (name: string): Promise<Pokemon> => {

  try {
    const url = `${BASE_URL}/pokemon/${name}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching Pokemon data for ${name} with status code ${response.status}`);
    }
    // const pokemon: Pokemon = await response.json();
    const data = await response.json();
    const pokemon: Pokemon = { ...data, is_selected: false};
    return pokemon;
  } catch (error) {
    console.error(`Error fetching Pokemon data for ${name}:`, error);
    throw error;
  }

};

// TODO: Fetch the PokeAPI for a list of Pokemon
export const fetchPokemonList = async (limit: number, offset: number): Promise<Pokemon[]> => {

  try {
    const url = `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching Pokemon list with status code ${response.status}`);
    }
    const paginatedPokemonList: PaginatedPokemonList = await response.json();
    return await Promise.all(paginatedPokemonList.results.map(({ name }) => fetchPokemon(name))) as Pokemon[];
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    throw error;
  }

}
