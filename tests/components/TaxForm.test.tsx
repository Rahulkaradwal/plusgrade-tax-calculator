import "@testing-library/jest-dom";
import React from "react";
import TaxForm from "../../src/components/TaxForm";

import { render, screen, fireEvent, waitFor } from "@testing-library/react";

describe("TaxForm", () => {
  it("renders the form fields", () => {
    render(<TaxForm />);
    expect(screen.getByLabelText("Annual Income")).toBeInTheDocument();
    expect(screen.getByLabelText("Tax Year")).toBeInTheDocument();
    expect(screen.getByText("Calculate Tax")).toBeInTheDocument();
  });

  it("shows validation errors for empty fields", async () => {
    render(<TaxForm />);
    fireEvent.click(screen.getByText("Calculate Tax"));

    await waitFor(() => {
      expect(
        screen.getByText("Annual income must be a greater than 0.")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Please select a valid tax year.")
      ).toBeInTheDocument();
    });
  });

  it("submits the form with valid data", async () => {
    render(<TaxForm />);
    fireEvent.change(screen.getByLabelText("Annual Income"), {
      target: { value: "50000" },
    });
    fireEvent.change(screen.getByLabelText("Tax Year"), {
      target: { value: "2022" },
    });
    fireEvent.click(screen.getByText("Calculate Tax"));

    await waitFor(() => {
      expect(
        screen.queryByText("Annual income must be a greater than 0.")
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("Please select a valid tax year.")
      ).not.toBeInTheDocument();
    });
  });
});
