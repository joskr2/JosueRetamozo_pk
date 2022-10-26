import { render, screen, cleanup } from "@testing-library/react"
import { afterEach, describe, it } from "vitest"
import NavBar from "./NavBar";


//test example
describe("NavBar", (): void => {
  afterEach(cleanup);

  it("should render  the title ", (): void => {
    render(<NavBar />)
    screen.getByText("Listado de Pokemon")
  })
})