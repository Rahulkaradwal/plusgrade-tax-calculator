import validateForm from "../../src/utils/validator";

describe("validateForm", () => {
  it("returns no errors for valid input", () => {
    const errors = validateForm({ annualIncome: "50000", taxYear: "2022" });
    expect(errors.annualIncome).toBe("");
    expect(errors.taxYear).toBe("");
  });

  it("returns an error for invalid income", () => {
    const errors = validateForm({ annualIncome: "-100", taxYear: "2022" });
    expect(errors.annualIncome).toBe("Annual income must be a greater than 0.");
  });

  it("returns an error for invalid tax year", () => {
    const errors = validateForm({ annualIncome: "50000", taxYear: "2023" });
    expect(errors.taxYear).toBe("Please select a valid tax year.");
  });
});
