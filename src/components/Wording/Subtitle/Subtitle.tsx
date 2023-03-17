import React from "react";
import classNames from "classnames";
import styles from "./Subtitle.module.scss";
import global_styles from "../../../assets/css/global.module.scss";

interface ISubtitleProps {
  color?: string;
  noMargin?: boolean;
  children: JSX.Element | string | null;
  bold?: boolean;
  className?: string;
}

export default function Subtitle({
  color = "",
  children,
  noMargin,
  bold = false,
  className,
}: ISubtitleProps) {
  return (
    <h3
      className={classNames(
        styles.root,
        bold && global_styles.bold,
        global_styles[color],
        noMargin && global_styles.noMargin,
        className
      )}
    >
      {children}
    </h3>
  );
}
