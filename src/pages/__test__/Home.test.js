import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import Home from "../Home";
import "@testing-library/jest-dom/extend-expect";

describe("Testing Login page", () => {
  it("It should match snapshot", () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
