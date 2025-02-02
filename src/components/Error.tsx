interface ErrorProps {
  message: string;
  type: "Input" | "Result";
}
function Error({ message, type }: ErrorProps) {
  return (
    <p
      className={`${
        type === "Result"
          ? "mt-4 text-center text-red-500"
          : "text-red-500 text-sm mt-1"
      }`}
    >
      {message}
    </p>
  );
}

export default Error;
