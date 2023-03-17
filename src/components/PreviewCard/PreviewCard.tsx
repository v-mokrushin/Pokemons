import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./PreviewCard.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react";
import { IPokemon } from "../../interfaces/pokemons";

interface IPreviewCardProps {
  pokemon: IPokemon;
  className?: string;
}

const PreviewCard = observer(({ pokemon, className }: IPreviewCardProps) => {
  return (
    <NavLink to={pokemon.name} className={classNames(styles.root, className)}>
      <img
        src={pokemon.image}
        className={styles.background}
        alt={`Покемон ${pokemon.name.toUpperCase()}`}
      />

      <div className={styles.contentWrapper}>
        <p className={styles.title}>{pokemon.name}</p>
      </div>
    </NavLink>
  );
});

export default PreviewCard;
