import { ErrorIcon, CloseIcon } from "@svg/Index";

interface AlertProps {
  error: string;
  close: () => void;
}

function Alter({ error, close }: AlertProps) {
  return (
    <div className="">
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

export default Alter;
