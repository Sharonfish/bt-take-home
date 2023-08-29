import styles from "./Profile.module.scss";
import { Link } from "react-router-dom";

export default function Profile() {
  // TODO: Select the saved Pokemon from the visitor's profile using Redux

  // TODO: Load the saved Pokemon using the fetchPokemon function defined in api.ts
  //   or redirect the visitor to the Browse page if they haven't saved a Pokemon

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {/* TODO: Display the pokemon using the PokemonCard component or your own reusable component */}
        <Link to="/browse" className={styles.button}>
          Select a different pokemon
        </Link>
      </div>
    </div>
  );
}
