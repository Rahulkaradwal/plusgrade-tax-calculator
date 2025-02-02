export interface TaxBracket {
  min: number;
  max?: number;
  rate: number;
}

export interface TaxBracketResponse {
  tax_brackets: TaxBracket[];
}

export interface TaxCalculationResult {
  totalTax: number;
  taxesPerBand: { min: number; max?: number; rate: number; tax: number }[];
  effectiveRate: number;
}

export interface FormData {
  annualIncome: string;
  taxYear: string;
}

export interface FormErrors {
  annualIncome: string;
  taxYear: string;
}
