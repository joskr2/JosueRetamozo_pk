import { pokemonApi } from "../api/pokeApi";
import { Pokemon, FetchAllPokemonResponse, SmallPokemon } from "../interfaces/IFetchAllPokemonResponse";

export const fetchAllPokemons = async(): Promise<Pokemon[]> => {
    
    const resp = await pokemonApi.get<FetchAllPokemonResponse>('/pokemon?limit=1500');
    const smallPokemonList = resp.data.results;

    return transformSmallPokemonIntoPokemon( smallPokemonList );
}

const transformSmallPokemonIntoPokemon = ( smallPokemonList: SmallPokemon[] ): Pokemon[] => {

    const pokemonArr: Pokemon[] = smallPokemonList.map( poke => {

        const pokeArr = poke.url.split('/');
        const id  = pokeArr[6];
        const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;

        return {
            id,
            pic,
            name: poke.name,
        }
    });
    
    return pokemonArr;
}