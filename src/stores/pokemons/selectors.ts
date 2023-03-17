import { IPokemon } from "./../../interfaces/pokemons";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./../index";

export const selectSelf = (state: RootState) => state.pokemons;

export const selectPokemons = createSelector(
  selectSelf,
  (state) => state.pokemons
);

export const selectPokemonsCount = createSelector(
  selectPokemons,
  (state) => Object.values(state.entities).length
);

export const selectPokemon = (
  state: RootState,
  { name }: { [key: string]: string }
): IPokemon | undefined => selectSelf(state).pokemons.entities[name];

export const selectPokemonsCurrentPage = createSelector(
  selectSelf,
  (state) => state.currentPage
);

export const selectPokemonsNumberPerPage = createSelector(
  selectSelf,
  (state) => state.pokemonsNumberPerPage
);

export const selectPokemonsPart = createSelector(selectSelf, (state) => {
  return state.filteredPokemons.slice(
    (state.currentPage - 1) * state.pokemonsNumberPerPage,
    state.currentPage * state.pokemonsNumberPerPage
  );
});

export const selectPokemonsPaginationCount = createSelector(
  selectSelf,
  (state) =>
    Math.ceil(state.filteredPokemons.length / state.pokemonsNumberPerPage)
);

export const selectPokemonsPaginationInfo = createSelector(
  selectSelf,
  (state) => {
    if (!state.filteredPokemons.length) return "Таких покемонов нет";
    const max = state.currentPage * state.pokemonsNumberPerPage;

    return `Покемоны ${
      (state.currentPage - 1) * state.pokemonsNumberPerPage + 1
    } - ${
      max > state.filteredPokemons.length ? state.filteredPokemons.length : max
    } из ${state.filteredPokemons.length}`;
  }
);

export const selectPokemonsLoadingStatus = createSelector(
  selectSelf,
  (state) => state.status
);

export const selectPokemonsNameFilter = createSelector(
  selectSelf,
  (state) => state.nameFilter
);
