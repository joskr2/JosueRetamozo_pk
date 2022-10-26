import Footer from "./components/footer/Footer"
import Main from "./components/main/Main"
import NavBar from "./components/navbar/NavBar"
import { usePokemon } from "./hooks/usePokemon";

const App = () => {

 
  return (
    <>
      <NavBar />
      <Main usePokemons={usePokemon}  />
      <Footer />
    </>
  )
}

export default App