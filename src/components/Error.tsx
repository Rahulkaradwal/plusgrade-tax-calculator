interface ErrorProps {
  message: string;
}
function Error({ message }: ErrorProps) {
  return <p className="mt-4 text-center text-red-500">{message}</p>;
}

export default Error;
