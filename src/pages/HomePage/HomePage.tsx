import React from "react";
import classNames from "classnames";
import styles from "./HomePage.module.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { LoadingLogo } from "../../components/LoadingLogo/LoadingLogo";
import { AppDispatch } from "../../stores";
import { loadPokemons } from "../../stores/pokemons/loadingMiddleware";
import { LOADING_STATUSES } from "../../constants/loading-statuses";
import { selectPokemonsLoadingStatus } from "../../stores/pokemons/selectors";
import { Preview } from "../../components/Preview/Preview";

export const HomePage: React.FC<{}> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loadingStatus = useSelector(selectPokemonsLoadingStatus);

  React.useEffect(() => {
    document.title = "Pokemons | Главная";
    dispatch(loadPokemons);
  }, [dispatch]);

  if (loadingStatus === LOADING_STATUSES.inProgress) return <LoadingLogo />;

  return (
    <div className={classNames(styles.root)}>
      <Preview />
    </div>
  );
};
