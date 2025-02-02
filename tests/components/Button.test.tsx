import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../../src/components/Button";

describe("Button", () => {
  it("renders the button with the correct text", () => {
    render(<Button text="Calculate Tax" type="submit" />);
    expect(screen.getByText("Calculate Tax")).toBeInTheDocument();
  });

  it("disables the button when disabled prop is true", () => {
    render(<Button text="Calculate Tax" type="submit" disabled />);
    expect(screen.getByText("Calculate Tax")).toBeDisabled();
  });
});
