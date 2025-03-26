function ErrorMessage({message}: {message: string | undefined}) {
  return <p className="text-red-500 text-xs italic h-5">{message}</p>;
}

export default ErrorMessage;
