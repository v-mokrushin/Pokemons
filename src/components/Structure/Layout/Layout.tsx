import classNames from "classnames";
import React from "react";
import { Container } from "../Container/Container";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import styles from "./Layout.module.scss";

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export const Layout: React.FC<ILayoutProps> = ({ children, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>

      <Footer />
    </div>
  );
};
