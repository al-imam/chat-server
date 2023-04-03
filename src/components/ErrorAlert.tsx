import { ErrorIcon, CloseIcon } from "@svg/Index";

interface AlertProps {
  error: string;
  close: () => void;
}

function ErrorAlert({ error, close }: AlertProps) {
  return (
    <div className="flex items-center gap-2 p-4 bg-red-400 rounded text-slate-900">
      <div className="flex items-center justify-center ">
        <ErrorIcon />
      </div>
      <p className="mr-auto">{error}</p>
      <button onClick={close} type="button">
        <CloseIcon />
      </button>
    </div>
  );
}

export default ErrorAlert;
