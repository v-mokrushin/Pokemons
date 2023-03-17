import {
  INormolizedPokemons,
  IPokemon,
  IPokemonsState,
} from "./../../interfaces/pokemons";
import { createSlice } from "@reduxjs/toolkit";
import { LOADING_STATUSES } from "../../constants/loading-statuses";
import { initialState } from "./constants";

export const pokemonsSlice = createSlice({
  name: "articleContentSlice",
  initialState: initialState,
  reducers: {
    startLoading(state: IPokemonsState) {
      state.status = LOADING_STATUSES.inProgress;
    },

    successPokemonsLoading(
      state,
      action: { payload: INormolizedPokemons; type: string }
    ) {
      state.pokemons = action.payload;
      state.filteredPokemons = Object.values(action.payload.entities);
      state.status = LOADING_STATUSES.success;
    },

    successPokemonInfoLoading(
      state,
      action: { payload: { name: string | undefined; info: any }; type: string }
    ) {
      const pokemon = state.pokemons.entities[action.payload.name || ""];

      if (pokemon) {
        try {
          const abilities: string[] = action.payload.info.abilities.map(
            (item: any) => item.ability.name
          );
          const types: string[] = Object.values(action.payload.info.types).map(
            (item: any) => item.type.name
          );
          const sprites: string[] = Object.values(
            action.payload.info.sprites as { [key: string]: string }
          ).filter((item) => item !== null && typeof item === "string");
          sprites.reverse();

          pokemon.info = {
            base_experience: action.payload.info.base_experience,
            weight: action.payload.info.weight,
            height: action.payload.info.height,
            stats: action.payload.info.stats,
            sprites,
            abilities,
            types,
          };

          state.status = LOADING_STATUSES.success;
        } catch (error: unknown) {
          state.status = LOADING_STATUSES.failed;
        }
      } else {
        state.status = LOADING_STATUSES.failed;
      }
    },

    failedLoading(state: IPokemonsState) {
      state.status = LOADING_STATUSES.failed;
    },

    setCurrentPage(
      state: IPokemonsState,
      action: { payload: number; type: string }
    ) {
      state.currentPage = action.payload;
    },

    setPokemonsNumberPerPage(
      state: IPokemonsState,
      action: { payload: number; type: string }
    ) {
      state.pokemonsNumberPerPage = action.payload;
    },

    setNameFilter(
      state: IPokemonsState,
      action: { payload: string; type: string }
    ) {
      state.nameFilter = action.payload;
      state.currentPage = 1;

      if (action.payload === "") {
        state.filteredPokemons = Object.values(state.pokemons.entities);
      } else {
        state.filteredPokemons = Object.values(state.pokemons.entities).filter(
          (pokemon) => pokemon.name.startsWith(action.payload.toLowerCase())
        );
      }
    },
  },
});
