import { render,screen, cleanup } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import App from "./App";

//test example
describe("Home page", (): void => {
  afterEach(cleanup);

  it("should render Home Page ", (): void => {
    render(<App />)
  })
})