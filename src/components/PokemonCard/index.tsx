import { PokemonCardProps } from "../../types/Pokemon.type"
import { usePokemon } from "../../contexts/Pokemon.context";
import styles from "./PokemonCard.module.scss";

export default function PokemonCard(pokemonCardProps: PokemonCardProps) {
  // TODO: Finish implementing this component or make your own reusable component;
  // remember to include the sprite, name, weight, and height
  
  const { pokemon, showSelect } = pokemonCardProps;
  const { selectPokemon, unselectPokemon } = usePokemon();

  return (
    <div className={styles.root}>
        <div className={styles.imageContainer}>
          <img src={pokemon.sprites.front_default} className={styles.image} alt={pokemon.name} />
        </div>
        <div className={styles.info}>
          <h3>{pokemon.name}</h3>
          <p>Weight: {pokemon.weight}</p>
          <p>Height: {pokemon.height}</p>
        </div>
        {showSelect && (
          <button
            className={styles.button}
            style={{ backgroundColor: pokemon.is_selected ? "green" : "red" }}
            onClick={() => {
              if (pokemon.is_selected) {
                unselectPokemon(pokemon);
              } else {
                selectPokemon(pokemon);
              }
            }}
          > 
            select 
          </button>
        )}
    </div>
  );
}
