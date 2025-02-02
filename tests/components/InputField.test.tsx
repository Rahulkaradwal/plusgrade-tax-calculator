import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "../../src/components/InputField";

describe("InputField", () => {
  it("renders the input field with a label", () => {
    render(
      <InputField
        id="income"
        label="Annual Income"
        value=""
        onChange={() => {}}
        name="income"
      />
    );
    expect(screen.getByLabelText("Annual Income")).toBeInTheDocument();
  });

  it("displays an error message when provided", () => {
    render(
      <InputField
        id="income"
        label="Annual Income"
        value=""
        onChange={() => {}}
        name="income"
        errorMessage="Invalid input"
      />
    );
    expect(screen.getByText("Invalid input")).toBeInTheDocument();
  });

  it("calls onChange when the input value changes", () => {
    const handleChange = jest.fn();
    render(
      <InputField
        id="income"
        label="Annual Income"
        value=""
        onChange={handleChange}
        name="income"
      />
    );
    fireEvent.change(screen.getByLabelText("Annual Income"), {
      target: { value: "50000" },
    });
    expect(handleChange).toHaveBeenCalled();
  });
});
