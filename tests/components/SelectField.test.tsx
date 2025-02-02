import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SelectField from "../../src/components/SelectField";

describe("SelectField", () => {
  it("renders the select field with a label", () => {
    render(
      <SelectField
        id="year"
        label="Tax Year"
        value=""
        onChange={() => {}}
        name="year"
        options={["2021", "2022"]}
      />
    );
    expect(screen.getByLabelText("Tax Year")).toBeInTheDocument();
  });

  it("displays an error message when provided", () => {
    render(
      <SelectField
        id="year"
        label="Tax Year"
        value=""
        onChange={() => {}}
        name="year"
        options={["2021", "2022"]}
        errorMessage="Invalid selection"
      />
    );
    expect(screen.getByText("Invalid selection")).toBeInTheDocument();
  });

  it("calls onChange when the select value changes", () => {
    const handleChange = jest.fn();
    render(
      <SelectField
        id="year"
        label="Tax Year"
        value=""
        onChange={handleChange}
        name="year"
        options={["2021", "2022"]}
      />
    );
    fireEvent.change(screen.getByLabelText("Tax Year"), {
      target: { value: "2022" },
    });
    expect(handleChange).toHaveBeenCalled();
  });
});
