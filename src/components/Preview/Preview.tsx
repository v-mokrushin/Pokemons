import classNames from "classnames";
import React from "react";
import styles from "./Preview.module.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { CustomPagination } from "../CustomPagination/CustomPagination";
import { PreviewFilter } from "../../components/PreviewFilter/PreviewFilter";
import Subtitle from "../Wording/Subtitle/Subtitle";
import { AppDispatch } from "../../stores";
import { PokemonCards } from "../../components/PokemonCards/PokemonCards";
import {
  selectPokemonsCurrentPage,
  selectPokemonsNameFilter,
  selectPokemonsNumberPerPage,
  selectPokemonsPaginationCount,
  selectPokemonsPaginationInfo,
  selectPokemonsPart,
} from "../../stores/pokemons/selectors";
import { pokemonsSlice } from "../../stores/pokemons";

interface IPreviewProps {
  className?: string;
}

export const Preview: React.FC<IPreviewProps> = ({ className }) => {
  const dispatch = useDispatch<AppDispatch>();
  const pokemons = useSelector(selectPokemonsPart);
  const currentPage = useSelector(selectPokemonsCurrentPage);
  const countInfo = useSelector(selectPokemonsPaginationInfo);
  const paginationCount = useSelector(selectPokemonsPaginationCount);
  const pokemonsNumberPerPage = useSelector(selectPokemonsNumberPerPage);
  const filterText = useSelector(selectPokemonsNameFilter);

  return (
    <div className={classNames(styles.root, className)}>
      <PreviewFilter
        value={filterText}
        onChange={(text: string) =>
          dispatch(pokemonsSlice.actions.setNameFilter(text))
        }
      />
      <Subtitle noMargin className={styles.counter}>
        {`${countInfo}`}
      </Subtitle>
      {pokemons.length ? (
        <>
          <PokemonCards pokemons={pokemons} currentPage={currentPage} />
          <CustomPagination
            onChangePage={(page: number)=>dispatch(pokemonsSlice.actions.setCurrentPage(page))}
            onChangeItemsPerPage={(itemsPerPage: number)=>dispatch(pokemonsSlice.actions.setPokemonsNumberPerPage(itemsPerPage))}
            currentPage={currentPage}
            paginationCount={paginationCount}
            numberPerPage={pokemonsNumberPerPage}
          />
        </>
      ) : null}
    </div>
  );
};
