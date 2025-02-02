import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import TaxBandTable from "../../src/components/TaxBandTable";
import { TaxCalculationResult } from "../../src/Types";

const mockTaxResult: TaxCalculationResult = {
  totalTax: 10000,
  effectiveRate: 20,
  taxesPerBand: [
    { min: 0, max: 10000, rate: 0.1, tax: 1000 },
    { min: 10000, max: 20000, rate: 0.2, tax: 2000 },
    { min: 20000, max: Infinity, rate: 0.3, tax: 7000 },
  ],
};

describe("TaxBandTable", () => {
  it("renders the tax bands table", () => {
    render(<TaxBandTable taxResult={mockTaxResult} />);
    expect(screen.getByText("Income Range")).toBeInTheDocument();
    expect(screen.getByText("Tax Owed")).toBeInTheDocument();

    // Check if all tax bands are rendered
    mockTaxResult.taxesPerBand.forEach((band) => {
      expect(
        screen.getByText(
          `$${band.min.toLocaleString()} - $${
            band.max?.toLocaleString() || "∞"
          }`
        )
      ).toBeInTheDocument();
      expect(screen.getByText(`$${band.tax.toFixed(2)}`)).toBeInTheDocument();
    });
  });
});
