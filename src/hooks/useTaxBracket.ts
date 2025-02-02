import { useCallback, useState } from "react";
import { TaxBracket } from "../Types";
import { URL } from "../utils/API_URL";

export const useTaxBracket = () => {
  // const [taxBracket, setTaxBracket] = useState<TaxBracket[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTaxBracket = useCallback(async (year: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${URL}/${year}`);
      if (!response.ok) {
        throw new Error("Failed to fetch tax brackets.");
      }
      const { tax_brackets } = await response.json();
      // setTaxBracket((prev) => (JSON.stringify(prev) !== JSON.stringify(tax_brackets) ? tax_brackets : prev));

      return tax_brackets as TaxBracket[]; // Return the fetched data
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, setError, fetchTaxBracket };
};
