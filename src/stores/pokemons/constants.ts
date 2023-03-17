import { IPokemon } from "./../../interfaces/pokemons";
import { LOADING_STATUSES } from "../../constants/loading-statuses";
import { IPokemonsState } from "../../interfaces/pokemons";

export const initialState: IPokemonsState = {
  pokemons: {
    entities: {},
    ids: [] as string[],
  },
  filteredPokemons: [],
  status: LOADING_STATUSES.idle,
  currentPage: 1,
  pokemonsNumberPerPage: 24,
  nameFilter: "",
};
