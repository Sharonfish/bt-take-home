import { useEffect } from "react";
import PokemonCard from "../../components/PokemonCard";
import { usePokemon } from "../../contexts/Pokemon.context";
import styles from "./Profile.module.scss";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  // TODO: Load the saved Pokemon using the fetchPokemon function defined in api.ts
  //   or redirect the visitor to the Browse page if they haven't saved a Pokemon
  const { selectedPokemon } = usePokemon();
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedPokemon.length === 0) {
      alert("You haven't selected a pokemon yet!")
      navigate("/browse");
    }
  },[]);

  return (
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.cardContainer}>
            {selectedPokemon.map((pokemon) => (
              <PokemonCard key={`selected-${pokemon.name}`} pokemon={pokemon} showSelect={false}/>
            ))}
          </div>
          <Link to="/browse" className={styles.button}>
            Select a different pokemon
          </Link>
        </div>
      </div>
  )
}
