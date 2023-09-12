export interface Pokemon {
    height: number,
    name: string,
    weight: number,
    sprites: {
      front_default: string
    },
    is_selected: boolean
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

export interface PokemonContextType {
    homepagePokemon: Pokemon[];
    browsePokemon: Pokemon[];
    selectedPokemon: Pokemon[];
    fetchHomepagePokemon: () => void;
    fetchMoreBrowsePokemon: () => void;
    selectPokemon: (pokemon: Pokemon) => void;
    unselectPokemon: (pokemon: Pokemon) => void;
}