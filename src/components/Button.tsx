interface ButtonProps {
  text: string;
  type: "submit" | "reset" | "button";
  disabled?: boolean;
}
function Button({ text, type, disabled }: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="w-full mt-8 cursor-pointer disabled:cursor-not-allowed bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
    >
      {text}
    </button>
  );
}

export default Button;
