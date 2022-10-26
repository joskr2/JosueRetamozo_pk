import { render, screen, cleanup } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import Footer from "./Footer";


describe("Footer", (): void => {
  afterEach(cleanup);
  it("should render the buttons ", (): void => {
    render(<Footer />)
    screen.getAllByRole("button")
  })
})