import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { prettyDOM } from "@testing-library/react";
import Services from "./Services";

describe("renders content", () => {
  test("To render", () => {
    const view = render(<Services />);
    expect(view.container).toHaveTextContent(
      "My favorite technology stack is the MERN (MongoDB, Express, React, Node) stack, with React being my top favorite skill"
    );
  });
});
