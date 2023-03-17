import { INormolizedPokemons, IPokemon } from "./../interfaces/pokemons";
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function translateStats(stat: string): string {
  switch (stat) {
    case "hp": {
      return "Здоровье";
    }
    case "attack": {
      return "Атака";
    }
    case "defense": {
      return "Защита";
    }
    case "special-attack": {
      return "Особая атака";
    }
    case "special-defense": {
      return "Особая защита";
    }
    case "speed": {
      return "Скорость";
    }
    default: {
      return "?";
    }
  }
}

export const normolize = (data: IPokemon[]) => ({
  entities: data.reduce((obj: { [key: string]: IPokemon }, item: IPokemon) => {
    obj[item.name] = item;
    return obj;
  }, {}),
  ids: data.map((item: IPokemon) => item.name) as string[],
});
