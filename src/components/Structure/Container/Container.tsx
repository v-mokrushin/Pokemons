import classNames from "classnames";
import React from "react";
import styles from "./Container.module.scss";

interface IContainerProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export const Container: React.FC<IContainerProps> = ({
  children,
  className,
}) => {
  return <div className={classNames(styles.root, className)}>{children}</div>;
};
