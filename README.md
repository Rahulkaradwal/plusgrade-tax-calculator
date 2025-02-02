# **Tax Calculator for Plusgrade**

## **Overview**

This is a **Tax Calculator** application that calculates the total income tax for a given salary and tax year. It fetches tax brackets from a dockerized API, calculates the taxes owed per band, and displays the total tax, effective rate, and taxes owed per band.

The application is built with **React** and follows best practices for scalability, clean code, error handling, and testing.

---

## **Features**

- **Input Form**: Accepts annual income and tax year as inputs.
- **Tax Calculation**: Fetches tax brackets for the selected year and calculates the total tax, effective rate, and taxes owed per band.
- **Error Handling**: Displays meaningful error messages for invalid inputs or API failures.
- **Responsive UI**: A clean and user-friendly interface.
- **Testing**: Includes unit tests for components, and utility functions.

---

## **Technologies Used**

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Jest, React Testing Library
- **API**: Dockerized tax bracket API

---

## **Setup Instructions**

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn
- Docker (for running the API locally, if needed)

### **Steps to Run the Application**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Rahulkaradwal/plusgrade-tax-calculator
   cd plusgrade-tax-calculator
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Application**:

   ```bash
   npm run dev
   # or
   yarn run dev
   ```

   The application will start on `http://localhost:5173/`.

4. **Run Tests**:

   ```bash
   npm run test
   # or
   yarn run test
   ```

## **How to Use**

1. Open the application in your browser.
2. Enter the **Annual Income** (e.g., `50000`).
3. Select the **Tax Year** (e.g., `2022`).
4. Click **Calculate Tax**.
5. The application will display:
   - **Total Tax**: The total income tax owed.
   - **Effective Rate**: The effective tax rate.
   - **Taxes Per Band**: The amount of tax owed for each tax bracket.

---

## **Project Structure**

```
plusgrade-tax-calculator/
├── public/                  # Static assets
├── src/
│   ├── components/          # React components
│   ├── hooks/               # Custom hooks
│   ├── utils/               # Utility functions
│   ├── Types.ts             # TypeScript types
│   ├── App.tsx              # Main application component
│   └── index.tsx            # Entry point
├── tests/                   # Unit tests
├── README.md                # Project documentation
├── package.json             # Project dependencies

```

---

## **Key Design Decisions**

1. **Custom Hooks**:

   - `useTaxBracket`: Handles fetching tax brackets from the API.
   - `useTaxCalculation`: Manages tax calculation logic and caching.
   - `useTaxFormInput`: Handles form input state and validation.

2. **Caching**:

   - Tax brackets are cached using `useRef` to avoid redundant API calls.

3. **Error Handling**:

   - Displays user-friendly error messages for invalid inputs or API failures.

4. **Testing**:

   - Unit tests are written for components and utility functions using Jest and React Testing Library.

5. **UI/UX**:
   - A clean and responsive UI built with Tailwind CSS.
   - Input validation and error messages improve user experience.

---

## **Testing**

The application includes unit tests for:

- **Components**: `TaxForm`, `TaxResult`, `TaxBandTable`, etc.
- **Utility Functions**: `calculateTax`, `validateForm`.

To run the tests:

```bash
npm run test
# or
yarn run test
```

---

## **Error Handling**

The application handles the following errors gracefully:

- **Invalid Inputs**: Displays error messages for invalid annual income or tax year.
- **API Failures**: Displays error messages if the API fails to fetch tax brackets.
