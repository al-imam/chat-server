import { ErrorIcon, CloseIcon } from "@svg/Index";

interface AlertProps {
  error: string;
  close: () => void;
}

function ErrorAlert({ error, close }: AlertProps) {
  return (
    <div className="flex items-center gap-2 p-4 bg-red-400 rounded text-slate-900">
      <div className="flex items-center justify-center scale-75 ">
        <ErrorIcon />
      </div>
      <p className="mr-auto">{error}</p>
      <button
        className="flex items-center justify-center rounded-full p-1 outline-none focus-visible:bg-white/30 hover:bg-white/30 scale-125 backdrop-blur-3xl"
        onClick={close}
        type="button"
        aria-label="close alert"
      >
        <CloseIcon />
      </button>
    </div>
  );
}

export default ErrorAlert;
