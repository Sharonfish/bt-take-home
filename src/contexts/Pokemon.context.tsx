import { createContext, useState, useContext, useEffect } from 'react';
import { Pokemon, PokemonContextType } from '../types/Pokemon.type';
import { fetchPokemonList } from '../lib/api';
import { HOMEPAGE_POKEMON_COUNT, POKEMON_PER_PAGE } from '../constants';

const PokemonContext = createContext<PokemonContextType>({
    homepagePokemon: [],
    browsePokemon: [],
    selectedPokemon: [],
    fetchHomepagePokemon: () => {},
    fetchMoreBrowsePokemon: () => {},
    selectPokemon: () => {},
    unselectPokemon: () => {}
});

// Create a context provider component
export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [homepagePokemon, setHomepagePokemon] = useState<Pokemon[]>([]);
    const [browsePokemon, setBrowsePokemon] = useState<Pokemon[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([]);
    const [browseOffset, setBrowseOffset] = useState(0);
  
    // Fetch the top Pokemon for the homepage. Default: 12
    const fetchHomepagePokemon = async () => {
        try {
            const data = await fetchPokemonList(HOMEPAGE_POKEMON_COUNT, 0);
            setHomepagePokemon(data);
        } catch (error) {
            console.error('Error fetching homepage Pokemon:', error);
        }
    };
  
    // Fetch Pokemon for the browse page. Default: 25
    const fetchBrowsePokemon = async () => {
        try {
            const data = await fetchPokemonList(POKEMON_PER_PAGE, browseOffset);
            setBrowsePokemon((prevPokemon) => [...prevPokemon, ...data]);
        } catch (error) {
            console.error('Error fetching browse Pokemon:', error);
        }
    };
  
    // Fetch more Pokemon for the browse page when "Load More" is clicked
    const fetchMoreBrowsePokemon = () => {
      setBrowseOffset((prevOffset) => prevOffset + POKEMON_PER_PAGE);
    };

    // Select a Pokemon and add it to the selectedPokemon list
    const selectPokemon = (pokemon: Pokemon) => {
        setSelectedPokemon((prevSelected) => [...prevSelected, pokemon]);
        updateSelectedBrowsePokemon(pokemon);
    };

    // Unselect a Pokemon and remove it from the selectedPokemon list
    const unselectPokemon = (pokemon: Pokemon) => {
        setSelectedPokemon((prevSelected) =>
            prevSelected.filter((selected) => selected.name !== pokemon.name)
        );
        updateSelectedBrowsePokemon(pokemon);
    };

    const updateSelectedBrowsePokemon = (updated_pokemon: Pokemon) => {
        setBrowsePokemon((prevPokemon) =>
            prevPokemon.map((pokemon) =>
                pokemon === updated_pokemon ? { ...pokemon, is_selected: !pokemon.is_selected } : pokemon
        ));
    }

    useEffect(() => {
        fetchHomepagePokemon();
    }, []);

    useEffect(() => {
        fetchBrowsePokemon();
    }, [browseOffset]);

    return (
        <PokemonContext.Provider
          value={{
            homepagePokemon,
            browsePokemon,
            selectedPokemon,
            fetchHomepagePokemon,
            fetchMoreBrowsePokemon,
            selectPokemon,
            unselectPokemon,
          }}
        >
          {children}
        </PokemonContext.Provider>
      );
};
    
// Create a custom hook to access the context
export const usePokemon = () => {
    return useContext(PokemonContext);
};