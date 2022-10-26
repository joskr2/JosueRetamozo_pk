import { Pokemon } from "./IFetchAllPokemonResponse";

export interface IMain {
  usePokemons: () => {
    isLoading: boolean;
    pokemons: Pokemon[];
  },
  currentPage?: number,
  search?: string
}