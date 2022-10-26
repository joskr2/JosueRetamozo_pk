import { Pokemon } from "./IFetchAllPokemonResponse";

export interface IListCard {
  source: string,
  number: string | number,
  name: string,
  href: string,
  bgColorIndex:string,
  selectCurrentPokemon?:Pokemon
}