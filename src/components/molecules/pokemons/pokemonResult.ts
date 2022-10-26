import { Pokemon } from "../../../interfaces/IFetchAllPokemonResponse";

const filteredPokemons = (search: string, pokemons: Pokemon[], currentPage: number): Pokemon[] => {

  if (search?.length === 0)
    return pokemons?.slice(currentPage, currentPage as number + 4);

  const filtered = pokemons?.filter(poke => poke.name.includes(search));
  return filtered.slice(currentPage, currentPage as number + 4);
}

export default filteredPokemons