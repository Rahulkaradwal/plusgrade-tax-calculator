interface InputFieldProps {
  id: string;
  label: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: string;
  errorMessage?: string;
}

function InputField({
  id,
  label,
  value,
  name,
  onChange,
  onBlur,
  type = "text",
  errorMessage,
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-800 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 transition duration-300 ${
          errorMessage
            ? "focus:ring-red-500 border-red-500"
            : "focus:ring-blue-400"
        }`}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
}

export default InputField;
