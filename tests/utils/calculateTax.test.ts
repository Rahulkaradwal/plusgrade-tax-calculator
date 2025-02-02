import { calculateTax } from "../../src/utils/calculateTax";
import { TaxBracket } from "../../src/Types";

describe("calculateTax", () => {
  const brackets: TaxBracket[] = [
    { min: 0, max: 10000, rate: 0.1 },
    { min: 10000, max: 20000, rate: 0.2 },
    { min: 20000, max: Infinity, rate: 0.3 },
  ];

  it("calculates tax for income within the first bracket", () => {
    const result = calculateTax(5000, brackets);
    expect(result.totalTax).toBe(500);
    expect(result.effectiveRate).toBe(10);
  });

  it("calculates tax for income spanning multiple brackets", () => {
    const result = calculateTax(25000, brackets);
    expect(result.totalTax).toBe(4500);
    expect(result.effectiveRate).toBe(18);
  });
});
