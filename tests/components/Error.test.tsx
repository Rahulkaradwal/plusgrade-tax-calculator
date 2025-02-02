import "@testing-library/jest-dom";
import React from "react";

import { render, screen } from "@testing-library/react";
import Error from "../../src/components/Error";

describe("Error", () => {
  it("renders the error message", () => {
    render(<Error message="An error occurred." />);
    expect(screen.getByText("An error occurred.")).toBeInTheDocument();
  });
});
