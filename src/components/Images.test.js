import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { prettyDOM } from "@testing-library/react";
import Images from "./Images";

describe("renders content", () => {
  test("find images by alt", () => {
    render(<Images />);
    const el = screen.getAllByAltText("letter h");

    expect(el[0]).toHaveAttribute("data-status", "inactive");
  });
  test("Img active atribute when moving mouse", () => {
    const view = render(<Images />);
    const el = screen.getAllByAltText("letter h");
    fireEvent.mouseMove(view.container, { clientX: 300, clientY: 300 });
    expect(el[0]).toHaveAttribute("data-status", "active");
  });
  test("Find main message to render", () => {
    const view = render(<Images />);
    expect(view.container).toHaveTextContent(
      "Move your mouse and find the secret message"
    );
  });
});
