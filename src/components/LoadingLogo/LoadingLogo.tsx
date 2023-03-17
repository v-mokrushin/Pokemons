import classNames from "classnames";
import React from "react";
import styles from "./LoadingLogo.module.scss";

interface ILoadingLogoProps {
  className?: string;
}

export const LoadingLogo: React.FC<ILoadingLogoProps> = ({ className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.logo}></div>
    </div>
  );
};
