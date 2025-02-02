import Error from "./Error";

interface SelectFieldProps {
  id: string;
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  errorMessage?: string;
}

export default function SelectField({
  id,
  label,
  name,
  value,
  options,
  onChange,
  errorMessage,
}: SelectFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-800 mb-1">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 transition duration-300 ${
          errorMessage
            ? "focus:ring-red-500 border-red-500"
            : "focus:ring-blue-400"
        }`}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errorMessage && <Error message={errorMessage} type="Input" />}
    </div>
  );
}
