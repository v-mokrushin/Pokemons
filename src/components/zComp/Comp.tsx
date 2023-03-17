import classNames from "classnames";
import React from "react";
import styles from "./Comp.module.scss";

interface ICompProps {
  className?: string;
}

export const Comp: React.FC<ICompProps> = ({ className }) => {
  return <div className={classNames(styles.root, className)}></div>;
};
