import classNames from "classnames";
import React from "react";
import styles from "./Main.module.scss";

interface IMainProps {
  children: JSX.Element | JSX.Element[];
}

export const Main: React.FC<IMainProps> = ({ children }) => {
  return <main className={classNames(styles.root)}>{children}</main>;
};
