import { TaxBracket, TaxCalculationResult } from "../Types";

export const calculateTax = (
  annualIncome: number,
  brackets: TaxBracket[]
): TaxCalculationResult => {
  let totalTax = 0;
  const taxesPerBand = brackets.map((bracket) => {
    const taxableAmount = Math.max(
      0,
      Math.min(annualIncome, bracket.max || Infinity) - bracket.min
    );
    const tax = taxableAmount * bracket.rate;
    totalTax += tax;
    return { ...bracket, tax };
  });

  const effectiveRate = annualIncome > 0 ? (totalTax / annualIncome) * 100 : 0;

  return { totalTax, taxesPerBand, effectiveRate };
};
