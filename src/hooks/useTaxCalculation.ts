import { useCallback, useState, useRef } from "react";
import { useTaxBracket } from "../hooks/useTaxBracket";
import { calculateTax } from "../utils/calculateTax";
import { TaxBracket, TaxCalculationResult } from "../Types";

const useTaxCalculation = () => {
  const [taxResult, setTaxResult] = useState<TaxCalculationResult | null>(null);
  const { loading, error: fetchError, fetchTaxBracket } = useTaxBracket();

  // Cache for tax brackets to store previously fetched data
  const taxBracketCache = useRef<Record<string, TaxBracket[]>>({});

  const calculate = useCallback(
    async (annualIncome: string, taxYear: string) => {
      // Clear previous result
      setTaxResult(null);

      try {
        // Check if tax brackets for the year are already cached
        if (taxBracketCache.current[taxYear]) {
          const cachedBrackets = taxBracketCache.current[taxYear];
          const result = calculateTax(parseInt(annualIncome), cachedBrackets);
          setTaxResult(result);
        } else {
          // Fetch tax brackets if not cached
          const brackets = await fetchTaxBracket(taxYear);
          if (brackets) {
            // Cache the fetched brackets
            taxBracketCache.current[taxYear] = brackets;
            const result = calculateTax(parseInt(annualIncome), brackets);
            setTaxResult(result);
          }
        }
      } catch (error) {
        console.error("Error calculating tax:", error);
      }
    },
    [fetchTaxBracket]
  );

  return {
    taxResult,
    loading,
    fetchError,
    calculate,
  };
};

export default useTaxCalculation;
