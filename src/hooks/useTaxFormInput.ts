import { useState } from "react";
import validateForm from "../utils/validator";

export const useTaxFormInput = () => {
  // state to store form data
  const [formData, setFormData] = useState({
    annualIncome: "",
    taxYear: "",
  });
  // state to store form input validation errors
  const [errors, setErrors] = useState({
    annualIncome: "",
    taxYear: "",
  });

  // function to validate the form
  const validate = () => {
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  // handles the input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return { formData, errors, validate, handleChange, setErrors };
};
