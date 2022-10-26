import Main from "./components/main/Main"
import NavBar from "./components/navbar/NavBar"
import { usePokemon } from "./hooks/usePokemon";

const App = () => {
  return (
    <>
      <NavBar />
      <Main usePokemons={usePokemon}  />
    </>
  )
}

export default App