import { LOADING_STATUSES } from "./../constants/loading-statuses";

export interface IPokemonsState {
  pokemons: INormolizedPokemons;
  filteredPokemons: IPokemon[];
  status: LOADING_STATUSES;
  currentPage: number;
  pokemonsNumberPerPage: number;
  nameFilter: string;
}

export interface IPokemon {
  name: string;
  url: string;
  image: string;
  info?: IPokemonInfo;
}

export interface IPokemonInfo {
  base_experience: number;
  weight: number;
  height: number;
  sprites: string[];
  abilities: string[];
  types: string[];
  stats: IPokemonStat[];
}

export interface INormolizedPokemons {
  entities: { [key: string]: IPokemon };
  ids: string[];
}

interface IPokemonStat {
  base_stat: number;
  stat: { name: string; url: string };
}

export interface IServerPokemon {
  name: string;
  url: string;
}
