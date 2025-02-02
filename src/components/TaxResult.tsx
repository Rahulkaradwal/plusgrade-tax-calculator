import { useMemo } from "react";
import { TaxCalculationResult } from "../Types";
import TaxBandTable from "./TaxBandTable";

interface TaxResultProps {
  taxResult: TaxCalculationResult;
}

function TaxResult({ taxResult }: TaxResultProps) {
  const totalTax = useMemo(() => taxResult.totalTax.toFixed(2), [taxResult]);
  const effectiveRate = useMemo(
    () => taxResult.effectiveRate.toFixed(2),
    [taxResult]
  );

  return (
    <div className="mt-4 text-center">
      <p className="text-lg font-semibold">Total Tax: ${totalTax}</p>
      <p className="text-sm">Effective Rate: {effectiveRate}%</p>

      <TaxBandTable taxResult={taxResult} />
    </div>
  );
}

export default TaxResult;
