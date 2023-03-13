import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { prettyDOM } from "@testing-library/react";
import Nav from "./Nav";

describe("renders content", () => {
  test("To render nav bar", () => {
    const view = render(<Nav />);
    screen.getByRole("navigation");
    // console.log(prettyDOM(el[0]));

    // const links = screen.getByTitle("a");
    // console.log(links[0]);
  });
});
