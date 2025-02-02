import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Header from "../../src/components/Header";

describe("Header", () => {
  it("renders the correct title and subtitle", () => {
    render(<Header />);
    expect(screen.getByText("Tax Calculator")).toBeInTheDocument();
    expect(
      screen.getByText("Plusgrade take-home assignment")
    ).toBeInTheDocument();
  });
});
