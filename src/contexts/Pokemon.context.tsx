import { createContext, useState, useContext, useEffect } from 'react';
import { Pokemon, PokemonContextType } from '../types/Pokemon.type';
import { fetchPokemonList } from '../lib/api';

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
  
    // Fetch the top 10 Pokemon for the homepage
    const fetchHomepagePokemon = async () => {
        try {
            const data = await fetchPokemonList(12, 0); // Fetch the first 10 Pokemon
            setHomepagePokemon(data);
        } catch (error) {
            console.error('Error fetching homepage Pokemon:', error);
        }
    };
  
    // Fetch 25 Pokemon for the browse page
    const fetchBrowsePokemon = async () => {
        try {
            const data = await fetchPokemonList(25, browseOffset);
            setBrowsePokemon((prevPokemon) => [...prevPokemon, ...data]);
        } catch (error) {
            console.error('Error fetching browse Pokemon:', error);
        }
    };
  
    // Fetch more Pokemon for the browse page when "Load More" is clicked
    const fetchMoreBrowsePokemon = () => {
      setBrowseOffset((prevOffset) => prevOffset + 25);
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