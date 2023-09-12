import styles from "./Browse.module.scss";
import { usePokemon } from '../../contexts/Pokemon.context';
import PokemonCard from "../../components/PokemonCard";

export default function Browse() {
  // TODO: Save a selected Pokemon for the Profile page

  // TODO: Load the list of Pokemon when the page loads and when the visitor clicks the "Load more"
  //   button using the fetchPokemonList function defined in api.ts

  const { browsePokemon, fetchMoreBrowsePokemon } = usePokemon();

  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        {/* TODO: Display the list of Pokemon using the PokemonCard component or your own reusable 
        component and allow the visitor to save the Pokemon to their profile */}
      </div>
      <div className={styles.cardContainer}>
        {browsePokemon.map((pokemon) => (
          <PokemonCard key={`browse-${pokemon.name}`} pokemon={pokemon} showSelect={true}/>
        ))}
      </div>
      <button className={styles.button} onClick={fetchMoreBrowsePokemon}>Load more...</button>
    </div>
  );
}
