import classNames from "classnames";
import React from "react";
import Block from "../Structure/Block/Block";
import Subtitle from "../Wording/Subtitle/Subtitle";
import styles from "./Sprites.module.scss";

interface ISpritesProps {
  sprites: string[];
  pokemonName?: string;
}

export const Sprites: React.FC<ISpritesProps> = ({
  sprites,
  pokemonName = "pokemon",
}) => {
  return (
    <Block>
      <Subtitle>Спрайты</Subtitle>
      <div className={classNames(styles.sprites)}>
        {sprites.map((photo: string, index: number) => (
          <div
            key={`sprite-${pokemonName}-${index}`}
            className={styles.spriteWrapper}
          >
            <img
              alt={`Спрайт ${pokemonName} ${index}`}
              src={photo}
              className={styles.sprite}
            />
          </div>
        ))}
      </div>
    </Block>
  );
};
