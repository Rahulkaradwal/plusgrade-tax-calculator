import { render, screen } from "@testing-library/react";
import App from "../src/App";
import "@testing-library/jest-dom";
import React from "react";

describe("App", () => {
  it("renders the Tax Calculator header", () => {
    render(<App />);
    expect(screen.getByText("Tax Calculator")).toBeInTheDocument();
    expect(
      screen.getByText("Plusgrade take-home assignment")
    ).toBeInTheDocument();
  });

  it("renders the TaxForm component", () => {
    render(<App />);
    expect(screen.getByLabelText("Annual Income")).toBeInTheDocument();
    expect(screen.getByLabelText("Tax Year")).toBeInTheDocument();
  });
});
