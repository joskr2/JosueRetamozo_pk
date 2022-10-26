import { ChangeEvent, FC, useState } from "react";

import { Pokemon } from "../../interfaces/IFetchAllPokemonResponse";
import { IMain } from "../../interfaces/IMain";
import InfoCard from "../molecules/cards/infoCard/InfoCard"
import ListCard from "../molecules/cards/listCard/ListCard"
import Loading from "../molecules/loading/Loading";
import filteredPokemons from "../molecules/pokemons/pokemonResult";
import "./style.css"

const Main: FC<IMain> = ({ usePokemons }) => {

  const { isLoading, pokemons } = usePokemons();
  const [currentPage, setCurrentPage] = useState(0)
  const [search, setSearch] = useState('');
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon>({ id: "", name: "", pic: "" })

  const onSearchChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setSearch(target.value);
  }

  const nextPage = () => {
    if (pokemons.filter(poke => poke.name.includes(search)).length > currentPage + 4)
      setCurrentPage(currentPage + 4);
  }

  const prevPage = () => {
    if (currentPage > 0)
      setCurrentPage(currentPage - 4);
  }

  return (
    <section>
      <div className="containers">
        <div className="listContainer">
          <input className="main_input" placeholder="Buscar" value={search}
            onChange={onSearchChange} />
          <div className="listCards__container">
            {
              filteredPokemons(search, pokemons, currentPage).map((pokemon: Pokemon, i: number) => (
                <div key={i} onClick={() => { setCurrentPokemon(pokemon) }}>
                  <ListCard source={`${pokemon.pic}`} number={pokemon.id} name={pokemon.name} bgColorIndex="#8FD8CE" />
                </div>
              ))
            }

          </div>
          {
            isLoading && <Loading />
          }
        </div>
        <div className="detailContainer">
          <InfoCard source={currentPokemon?.pic} number={currentPokemon?.id} name={currentPokemon?.name} bgColorIndex="#B4AAF9" />
        </div>
      </div>
      <footer >
        <button role="button" onClick={prevPage} >
          &lt;&#32; Atras
        </button>
        <button role="button" onClick={nextPage} >
          Siguiente &#32; &gt;
        </button>
      </footer>
    </section>
  )
}

export default Main