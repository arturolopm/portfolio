import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { prettyDOM } from "@testing-library/react";
import Header from "./Header";

describe("renders header content", () => {
  test("Have one external link", () => {
    const view = render(<Header />);
    const extLink = screen.getByRole("link");
  });
  test("Have one Button", () => {
    render(<Header />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveTextContent("Work with me");
  });
});
