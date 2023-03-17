import classNames from "classnames";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { AppDispatch, RootState } from "../../stores";
import styles from "./PokemonPage.module.scss";
import { capitalize } from "../../utils/common";
import {
  selectPokemon,
  selectPokemonsLoadingStatus,
} from "../../stores/pokemons/selectors";
import { loadPokemonInfo } from "../../stores/pokemons/loadingMiddleware";
import { LOADING_STATUSES } from "../../constants/loading-statuses";
import Text from "../../components/Wording/Text/Text";
import { LoadingLogo } from "../../components/LoadingLogo/LoadingLogo";
import { PokemonInfo } from "../../components/PokemonInfo/PokemonInfo";
import { Sprites } from "../../components/Sprites/Sprites";

interface IPokemonPageProps {}

export const PokemonPage: React.FC<IPokemonPageProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { name } = useParams();
  const loadingStatus = useSelector(selectPokemonsLoadingStatus);
  const pokemon = useSelector((state) =>
    selectPokemon(state as RootState, { name: name ? name : "" })
  );

  React.useEffect(() => {
    if (name) {
      document.title = `Pokemons | ${capitalize(name)}`;
      dispatch(loadPokemonInfo(name, !!pokemon?.info));
    }
  }, [name, loadingStatus, pokemon?.info, dispatch]);

  if (loadingStatus === LOADING_STATUSES.inProgress) return <LoadingLogo />;
  if (!name) return <h3>Ошибка</h3>;
  if (!pokemon) return <h3>Такого покемона нет</h3>;
  if (!pokemon.info) return <h3>Ошибка. Информация не загружена.</h3>;

  return (
    <div className={classNames(styles.root)}>
      <PokemonInfo pokemon={pokemon} />
      <Sprites sprites={pokemon.info.sprites} pokemonName={pokemon.name} />
      <button className={styles.back} onClick={() => navigate("/")}>
        <Text>← Назад на главную</Text>
      </button>
    </div>
  );
};
