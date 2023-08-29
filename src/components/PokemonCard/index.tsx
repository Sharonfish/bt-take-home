import { Pokemon } from "../../lib/api";
import styles from "./PokemonCard.module.scss";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  // TODO: Finish implementing this component or make your own reusable component;
  //   remember to include the sprite, name, weight, and height
  return <div className={styles.root}>{pokemon.name}</div>;
}
