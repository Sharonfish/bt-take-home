import styles from "./Browse.module.scss";

export default function Browse() {
  // TODO: Dispatch the action to Redux for saving a Pokemon the visitor's profile

  // TODO: Load the list of Pokemon when the page loads and when the visitor clicks the "Load more"
  //   button using the fetchPokemonList function defined in api.ts

  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        {/* TODO: Display the list of Pokemon using the PokemonCard component or your own reusable 
        component and allow the visitor to save the Pokemon to their profile */}
      </div>
      <button className={styles.button}>Load more...</button>
    </div>
  );
}
