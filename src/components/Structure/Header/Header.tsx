import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className={classNames(styles.root)}>
      <NavLink to="/" className={styles.logoBox}>
        <h1 className={styles.title}>Pokemons</h1>
        <button className={styles.logo}></button>
      </NavLink>
    </header>
  );
};
