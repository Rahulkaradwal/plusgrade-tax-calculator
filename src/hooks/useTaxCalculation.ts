import { useState } from "react";
import { useTaxBracket } from "../hooks/useTaxBracket";
import { calculateTax } from "../utils/calculateTax";
import { TaxCalculationResult } from "../Types";

const useTaxCalculation = () => {
  // custom hooks
  const [taxResult, setTaxResult] = useState<TaxCalculationResult | null>(null);
  const { loading, error: fetchError, fetchTaxBracket } = useTaxBracket();

  const calculate = async (annualIncome: string, taxYear: string) => {
    // clear previous result
    setTaxResult(null);

    try {
      const brackets = await fetchTaxBracket(taxYear);
      if (brackets) {
        const result = calculateTax(parseInt(annualIncome), brackets);
        setTaxResult(result);
      }
    } catch (error) {
      console.error("Error calculating tax:", error);
    }
  };

  return {
    taxResult,
    loading,
    fetchError,
    calculate,
  };
};

export default useTaxCalculation;
