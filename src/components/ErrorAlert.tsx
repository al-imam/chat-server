import { ErrorIcon, CloseIcon } from "@svg/Index";

interface AlertProps {
  error: string;
  close: () => void;
}

function ErrorAlert({ error, close }: AlertProps) {
  return (
    <div className="flex items-center gap-2 p-4 rounded">
      <div>
        <ErrorIcon />
      </div>
      <p>{error}</p>
      <button onClick={close} type="button">
        <CloseIcon />
      </button>
    </div>
  );
}

export default ErrorAlert;
