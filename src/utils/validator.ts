import { FormErrors, FormData } from "../Types";

export default function validateForm(formData: FormData): FormErrors {
  const errors: FormErrors = { annualIncome: "", taxYear: "" };

  if (!formData.annualIncome || parseFloat(formData.annualIncome) < 0) {
    errors.annualIncome = "Annual income must be a greater than 0.";
  }

  if (!["2019", "2020", "2021", "2022"].includes(formData.taxYear)) {
    errors.taxYear = "Please select a valid tax year.";
  }

  return errors;
}
