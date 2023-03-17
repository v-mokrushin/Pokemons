import React from "react";
import { IPokemon } from "../../interfaces/pokemons";
import { capitalize, translateStats } from "../../utils/common";
import { SpecsTable } from "../SpecsTable/SpecsTable";
import Block from "../Structure/Block/Block";
import Subtitle from "../Wording/Subtitle/Subtitle";
import Text from "../Wording/Text/Text";
import styles from "./PokemonInfo.module.scss";

interface IPokemonInfoProps {
  pokemon: IPokemon;
}

export const PokemonInfo: React.FC<IPokemonInfoProps> = ({ pokemon }) => {
  return (
    <Block>
      <div className={styles.root}>
        <div className={styles.leftSide}>
          <Subtitle noMargin color="gold" bold className={styles.title}>
            {capitalize(pokemon.name)}
          </Subtitle>
          <img
            className={styles.photo}
            src={pokemon.image}
            alt={`Pokemon ${pokemon.name}`}
          />
        </div>
        {pokemon.info && <SpecsTable info={pokemon.info} />}
      </div>
    </Block>
  );
};
