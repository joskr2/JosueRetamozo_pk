import {
  atom,
} from 'recoil';
import { Pokemon } from '../../interfaces/IFetchAllPokemonResponse';

const pokemonSelectedState = atom({
  key: 'pokemonSelected', // unique ID (with respect to other atoms/selectors)
  default: {
    id: "",
    name: "",
    pic: "",
  }, // default value (aka initial value)
});

export default pokemonSelectedState

