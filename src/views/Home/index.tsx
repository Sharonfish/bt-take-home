import styles from "./Home.module.scss";
import { usePokemon } from "../../contexts/Pokemon.context";
import PokemonCard from "../../components/PokemonCard";

export default function Home() {

  const { homepagePokemon } = usePokemon();

  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>Welcome to Pokemon Profile</h1>
      <h3 className={styles.subheading}>Here are some Pokemon to get you started</h3>
      <div className={styles.cardContainer}>
        {homepagePokemon.map((pokemon) => (
          <PokemonCard key={`home-${pokemon.name}`} pokemon={pokemon} showSelect={false}/>
        ))}
      </div>
    </div>
  );
}
