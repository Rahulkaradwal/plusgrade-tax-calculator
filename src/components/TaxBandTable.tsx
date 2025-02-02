import { TaxCalculationResult } from "../Types";

interface TaxBandTableProps {
  taxResult: TaxCalculationResult;
}
function TaxBandTable({ taxResult }: TaxBandTableProps) {
  return (
    <div className="mt-2">
      <h3 className="font-semibold">Taxes Per Band:</h3>
      <table className="min-w-full divide-y divide-gray-200 mt-2">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Income Range
            </th>
            <th className="px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tax Owed
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {taxResult.taxesPerBand.map((band, index) => (
            <tr key={index}>
              <td className="px-4 py-2 text-left whitespace-nowrap text-sm text-gray-900">
                ${band.min.toLocaleString()} - $
                {band.max?.toLocaleString() || "∞"}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                ${band.tax.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaxBandTable;
