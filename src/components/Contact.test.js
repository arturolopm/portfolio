import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { prettyDOM } from "@testing-library/react";
import Contact from "./Contact";

test("renders Contact content", () => {
  render(<Contact />);
  const el = screen.getByRole("button");
  expect(el).toHaveTextContent("Send message");
});
