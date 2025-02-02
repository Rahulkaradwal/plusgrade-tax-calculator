import "@testing-library/jest-dom";
import React from "react";

import { render, screen } from "@testing-library/react";
import { TaxCalculationResult } from "../../src/Types";
import TaxResult from "../../src/components/TaxResult";

const mockTaxResult: TaxCalculationResult = {
  totalTax: 10000,
  effectiveRate: 20,
  taxesPerBand: [
    { min: 0, max: 10000, rate: 0.1, tax: 1000 },
    { min: 10000, max: 20000, rate: 0.2, tax: 2000 },
    { min: 20000, max: Infinity, rate: 0.3, tax: 7000 },
  ],
};

describe("TaxResult", () => {
  it("renders the total tax and effective rate", () => {
    render(<TaxResult taxResult={mockTaxResult} />);
    expect(screen.getByText("Total Tax: $10000.00")).toBeInTheDocument();
    expect(screen.getByText("Effective Rate: 20.00%")).toBeInTheDocument();
  });

  it("renders the TaxBandTable component", () => {
    render(<TaxResult taxResult={mockTaxResult} />);
    expect(screen.getByText("Taxes Per Band:")).toBeInTheDocument();
  });
});
