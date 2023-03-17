import classNames from "classnames";
import React from "react";
import { ANIMATIONS } from "../../constants/animations";
import { IPokemon } from "../../interfaces/pokemons";
import PreviewCard from "../PreviewCard/PreviewCard";
import styles from "./PokemonCards.module.scss";

interface IPokemonCardsProps {
  pokemons: IPokemon[];
  currentPage?: number; // для повторения плавной анимации при смене страницы
  className?: string;
}

export const PokemonCards: React.FC<IPokemonCardsProps> = ({
  pokemons,
  currentPage = 0,
  className,
}) => {
  return (
    <div
      className={classNames(styles.previewCards, ANIMATIONS.fadeIn)}
      key={currentPage}
    >
      {pokemons.map((pokemon) => (
        <PreviewCard pokemon={pokemon} key={pokemon.name} />
      ))}
    </div>
  );
};
