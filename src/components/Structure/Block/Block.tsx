import classNames from "classnames";
import React from "react";
import styles from "./Block.module.scss";

interface IBlockProps {
  children: JSX.Element[] | JSX.Element | string;
  className?: string;
}

export default function Block({ children, className }: IBlockProps) {
  return <div className={classNames(styles.root, className)}>{children}</div>;
}
