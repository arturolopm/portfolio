import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { prettyDOM } from "@testing-library/react";
import Banner from "./Banner";

test("renders content", () => {
  const view = render(<Banner />);
  screen.getByText(
    "I can help you build a website, product or implement new features. Take a look of some of my work and experience. If you like what you see feel free to get in touch with me."
  );
  const btn = screen.getByRole("button");
  expect(btn).toHaveTextContent("Contact me");
  const linksOutside = screen.getAllByRole("link");
  expect(linksOutside.length).toBeGreaterThan(1);
});
