import { TaxCalculationResult } from "../Types";
import TaxBandTable from "./TaxBandTable";

interface TaxResultProps {
  taxResult: TaxCalculationResult;
}

function TaxResult({ taxResult }: TaxResultProps) {
  return (
    <div className="mt-4 text-center">
      <p className="text-lg font-semibold">
        Total Tax: ${taxResult.totalTax.toFixed(2)}
      </p>
      <p className="text-sm">
        Effective Rate: {taxResult.effectiveRate.toFixed(2)}%
      </p>
      <TaxBandTable taxResult={taxResult} />
    </div>
  );
}

export default TaxResult;
