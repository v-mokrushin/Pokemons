import { normolize } from "./../../utils/common";
import axios from "axios";
import { pokemonsSlice } from ".";
import { AppDispatch, RootState } from "..";
import { LOADING_STATUSES } from "../../constants/loading-statuses";
import { IPokemon, IServerPokemon } from "../../interfaces/pokemons";
import {
  selectPokemonsCount,
  selectPokemonsLoadingStatus,
} from "./selectors";

export const loadPokemons = (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  if (selectPokemonsLoadingStatus(getState()) === LOADING_STATUSES.success) {
    return;
  }

  dispatch(pokemonsSlice.actions.startLoading());

  // limit=1000, т.к. после тысячного покемона
  // начинаются проблемы со спрайтами
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
    .then((response) => {
      const pokemons: IPokemon[] = response.data.results.map(
        (pokemon: IServerPokemon, index: number) => ({
          ...pokemon,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        })
      );
      console.log(normolize(pokemons));
      dispatch(
        pokemonsSlice.actions.successPokemonsLoading(normolize(pokemons))
      );
    })
    .catch((error) => {
      dispatch(pokemonsSlice.actions.failedLoading());
    });
};

export const loadPokemonInfo =
  (pokemonName: string, isInfo: boolean) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    if (isInfo) return;

    const isLoadingInProgress =
      selectPokemonsLoadingStatus(getState()) === LOADING_STATUSES.inProgress ||
      selectPokemonsLoadingStatus(getState()) === LOADING_STATUSES.failed;
    if (isLoadingInProgress) return;

    const isPokemonsLoaded = selectPokemonsCount(getState()) > 0;
    if (!isPokemonsLoaded) {
      loadPokemons(dispatch, getState);
      return;
    }

    dispatch(pokemonsSlice.actions.startLoading());

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        dispatch(
          pokemonsSlice.actions.successPokemonInfoLoading({
            name: pokemonName,
            info: response.data,
          })
        );
      })
      .catch((error) => {
        dispatch(pokemonsSlice.actions.failedLoading());
      });
  };
