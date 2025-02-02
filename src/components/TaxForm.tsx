import useTaxCalculation from "../hooks/useTaxCalculation";
import InputField from "./InputField";
import Button from "./Button";
import SelectField from "./SelectField";
import TaxResult from "./TaxResult";
import Error from "./Error";
import { useTaxFormInput } from "../hooks/useTaxFormInput";

export default function TaxForm() {
  // custom hooks
  const { formData, errors, handleChange, validate } = useTaxFormInput();
  const { taxResult, loading, fetchError, calculate } = useTaxCalculation();

  // handles the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      await calculate(formData.annualIncome, formData.taxYear);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        id="annualIncome"
        label="Annual Income"
        name="annualIncome"
        type="number"
        value={formData.annualIncome}
        onChange={handleChange}
        errorMessage={errors.annualIncome}
      />

      <SelectField
        id="taxYear"
        label="Tax Year"
        name="taxYear"
        value={formData.taxYear}
        options={["2019", "2020", "2021", "2022"]}
        onChange={handleChange}
        errorMessage={errors.taxYear}
      />

      <Button
        type="submit"
        text={loading ? "Calculating..." : "Calculate Tax"}
        disabled={loading}
      />

      {fetchError && <Error message={fetchError} />}
      {!fetchError && taxResult && <TaxResult taxResult={taxResult} />}
    </form>
  );
}
