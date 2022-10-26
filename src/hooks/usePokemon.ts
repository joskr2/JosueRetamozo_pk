import { useState, useEffect } from 'react';
import { fetchAllPokemons } from '../helpers/fetchAllPokemon';
import { Pokemon } from '../interfaces/IFetchAllPokemonResponse';

export const usePokemon = () => {
    
    const [ isLoading, setisLoading ] = useState(true);
    const [ pokemons, setPokemons ] = useState<Pokemon[]>([])

    useEffect(() => {
        fetchAllPokemons()
            .then( pokemons => {
                setisLoading(false);
                setPokemons( pokemons );
            })
    }, [])

    return {
        isLoading,
        pokemons
    }
}