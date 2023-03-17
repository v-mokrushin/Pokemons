import classNames from "classnames";
import React from "react";
import styles from "./Footer.module.scss";

interface IFooterProps {
  className?: string;
}

export const Footer: React.FC<IFooterProps> = ({ className }) => {
  return (
    <footer className={classNames(styles.root)}>
      <span className={styles.text}>Pokemons 2023 ©</span>
    </footer>
  );
};
