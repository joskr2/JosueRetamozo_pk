import { render, screen, cleanup } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import { usePokemon } from "../../hooks/usePokemon";
import Main from "./Main";

//test example
describe("NavBar", (): void => {
  afterEach(cleanup);
  // its mean that at least 1 pokemon has been displayed
  it("should render  a image of the pokemon ", (): void => {
    render(<Main usePokemons={usePokemon } />)
    screen.getAllByAltText("pokemon image")
  })
})