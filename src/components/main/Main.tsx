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

  const onSearchChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setSearch(target.value);
  }

  return (
    <section>
      <div className="containers">
        <div className="listContainer">
          <input className="main_input" placeholder="Buscar" value={search}
            onChange={onSearchChange} />
          <div className="listCards__container">
            {
              filteredPokemons(search, pokemons, currentPage).map((pokemon: Pokemon) => (
                <>
                  <ListCard source={`${pokemon.pic}`} number={pokemon.id} name={pokemon.name} href="/" bgColorIndex="#8FD8CE" selectCurrentPokemon={pokemon} />
                </>
              ))
            }

          </div>
          {
            isLoading && <Loading />
          }
        </div>
        <div className="detailContainer">
          <InfoCard source="https://via.placeholder.com/150" number={3} name="Pikachu" href="/" bgColorIndex="#B4AAF9" />
        </div>
      </div>
      <footer >
        <button role="button" >
          &lt;&#32; Atras
        </button>
        <button role="button"  >
          Siguiente &#32; &gt;
        </button>
      </footer>
    </section>
  )
}

export default Main